import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {LoginData, Token} from "../interfaces";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root',
})
export class AuthProxyService {
  constructor(private http: HttpClient) {}

  login(body: LoginData) {
    return this.http.post<Token>(`${environment.apiUrl}/authenticate`, body);
  }
}
