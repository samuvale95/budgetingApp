import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EnvService } from '../core/env.service';
import { AccountsResponse } from './store/models/accounts-response';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PrivateService {

  constructor(
    private http: HttpClient, 
    private env: EnvService) {}

    public accounts = (): Observable<AccountsResponse> => {
      return this.http.get<AccountsResponse>(this.env.baseEndPoint+"/accounts");
    }
}
