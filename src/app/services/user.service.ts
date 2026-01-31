import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',  // سرویس به صورت سراسری در دسترس است
})
export class UserService {
  private url = 'https://adminuat.tamland.ir/api/';

  constructor(private http: HttpClient) {}

  checkPhoneNumber(mobile: any) {
    const uri = `${this.url}api/user/checkPhoneNumber/${mobile}`;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.http.get<any>(uri, httpOptions);
  }
}