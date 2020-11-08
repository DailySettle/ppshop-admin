import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private BASE_URL = environment.SERVER_URL;

  constructor(private http: HttpClient) {
  }

  login(email: string, password: string): Observable<any> {
    const url = `${this.BASE_URL}/user/login`;
    const username = email;
    return this.http.post<any>(url, {username, password});
  }
}
