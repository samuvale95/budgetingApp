import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnvService {

  public environmentName: string = 'DEFAULT';
  public baseEndPoint: string = 'http://localhost:8080';
  public timeout: number = 180e3;

  constructor() { }
}
