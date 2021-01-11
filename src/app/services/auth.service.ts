import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { API_URL} from '../app.constant';
import { map } from 'rxjs/operators';

export const TOKEN = 'token';
export const AUTHENTICATED_USER = 'authenticatedUser';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  username!: string;

  constructor(
    private http: HttpClient
  ) { }

  executeJWTAuthenticationService = (email: string, password: string) => this.http.post<any>(
    `${API_URL}/authenticate`, {
    email,
    password
    }
  ).pipe(
    map(
      response => {
        sessionStorage.setItem(AUTHENTICATED_USER, email);
        sessionStorage.setItem(TOKEN, `Bearer ${response.token}`);
        return response;
      }
    )
  )
  getAuthenticatedUser = () => {
    return sessionStorage.getItem(AUTHENTICATED_USER);
  }

  getAuthenticationToken = () => {
    if (this.getAuthenticatedUser()){
      return sessionStorage.getItem(TOKEN);
    }
  }

  isUserActive = () => {
    const user = sessionStorage.getItem(AUTHENTICATED_USER);
    return !(user === null);
  }

  logout = () => {
    sessionStorage.removeItem(AUTHENTICATED_USER);
    sessionStorage.removeItem(TOKEN);
  }
}
