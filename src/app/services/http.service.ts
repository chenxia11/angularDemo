import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
// import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Accept': 'application/json'
  })
};
@Injectable({
  providedIn: 'root'
})

export class HttpService {
  constructor(private http: HttpClient) { }
  get(url:string) {
    return this.http.get<any>(url)
  }
  post(url:string,params:object={}):Observable<any>{
    return this.http.post<any>(url, params, httpOptions)
  }
}
