import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EnvService } from '../../core/env.service';
import { StorageManagerService } from '../../core/storage-manager/storage-manager.service';
import { Store } from '@ngrx/store';
import { PrivateActions } from '../../private/store/private.actions';
import { Observable, map } from 'rxjs';
import { RegistrationResponse } from '../../public/store/models/registration';


export interface UserData {
  access_token: string;
  expires_in: number;
  name: string;
  surname: string;
  email: string;
  link_img: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient, 
    private env: EnvService,
    private storageManager: StorageManagerService,
    private store: Store){

    }

  public isAuthenticated = (): boolean => {
    return true
  }

  public login = (email: string, password: string): Observable<UserData> => {
    return this.http.post<UserData>(`${this.env.baseEndPoint}/login`, {email: email, password: password});
  }

  public registration = (email: string, password: string): Observable<RegistrationResponse> => {
    return this.http.post<RegistrationResponse>(`${this.env.baseEndPoint}/register`, {email: email, password: password});
  }
}
