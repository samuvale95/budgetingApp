import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, delay, dematerialize, materialize, mergeMap, of, throwError } from "rxjs";
import { ServiceMock } from "./service.mock";

enum RequestMethod {
    GET = 'GET',
    POST = 'POST',
    PUT = 'PUT',
    DELETE = 'DELETE',
    OPTIONS = 'OPTIIONS',
    HEAD = 'HEAD',
    PATCH = 'PATCH'
}

export type RequestMethodType = keyof typeof RequestMethod;

@Injectable()
export class HttpMockFactory implements HttpInterceptor {

    private myMock = HttpMockFactory.mergeObjSmart(ServiceMock);
    private static readonly SPECIAL_CHAR = '{';

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return of(null).pipe(
          mergeMap(() => this.handleRoute(request, next)),
          materialize(),
          delay(500),
          dematerialize()
        );
    }

    handleRoute(req: HttpRequest<any>, next: HttpHandler) {
        const {url, method, headers, body} = req;

        const keyOfResponse = Object.keys(this.myMock[method]).find((key) => {
            const idx = url.indexOf(HttpMockFactory.SPECIAL_CHAR)
            if(idx >= 0){
                const lastUrlFregment = url.split('/').pop();
                return lastUrlFregment === key.split('/').pop();
            }
            return url.endsWith(key)
        }) || '';

        const mockedResponse = this.myMock[method][keyOfResponse];

        if(mockedResponse){
            const headersList = headers.keys().map(k => ({[`${k}`]: headers.get(k)}));
            console.log(`%c[mock] intercept request to ${url} with this body`, 'background: #222; color: #bada55', headersList, body);
            const status = mockedResponse.statusCode || 200;
            console.log('%c[mock] response', 'background: #222; color: #bada55', status, mockedResponse);

            return !!status && status!== 200
            ? throwError(() => 
                new HttpErrorResponse({
                    status, 
                    error: mockedResponse || {},
                    url
                })
            )
            : of(new HttpResponse({
                status,
                body: mockedResponse || {}
            }))
        }

        return next.handle(req);
    }
    
    public static mergeObjSmart(...objs: any[]): any {
        return objs.reduce((accumulator, currentValue, index, array) => {
          Object.keys(RequestMethod).forEach((v) => {
            accumulator = {...accumulator, [v]: {...accumulator[v], ...currentValue[v]}};
          });
          return accumulator;
        });
    }
}