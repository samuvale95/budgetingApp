import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { Component } from '@angular/core';
import { HttpMockFactory } from './http-mock-factory';

@Component({
  selector: 'app-mock',
  standalone: true,
  imports: [],
  templateUrl: './mock.component.html',
  styleUrl: './mock.component.scss'
})
export class MockComponent {

}

export const MockInterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: HttpMockFactory,
  multi: true,
};
