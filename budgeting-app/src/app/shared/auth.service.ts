import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EnvService } from '../core/env.service';
import { StorageManagerService } from '../core/storage-manager/storage-manager.service';


interface LoggedUserInfo {
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
    private storageManager: StorageManagerService){

    }

  public isAuthenticated = (): boolean => {
    return true
  }

  public login = (email: string, password: string) => {
    this.http.post<LoggedUserInfo>(`${this.env.baseEndPoint}/v1/login`, {email: email, password: password})
    .subscribe((result)=>{
      
      this.storageManager.setLocalItem("loggedUserInfo", result);
    })
  }
}
