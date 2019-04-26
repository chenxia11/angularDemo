import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError,of } from 'rxjs';
import { map, catchError,tap,mergeMap } from 'rxjs/operators';
import { Router } from '@angular/router';
// import { NzMessageService } from 'ng-zorro-antd';
import { environment } from '../../environments/environment';


@Injectable()
export class DefaultInterceptor implements HttpInterceptor {
  constructor(private router: Router) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    
    const token = localStorage.getItem('token');
    // const token = 'b3381874ecf44f25a6b6cc411c369ed4_4f30fb53158045668a8c0b7992f34d61';

    if (token) {
      request = request.clone({
        setHeaders: {
          token: token
        }
      });
    }
    if(request.url.startsWith("/")){
      request = request.clone({
        url: `${environment.path}${request.url}`
      });
    }
    return next.handle(request).pipe(
      mergeMap(
        (event: any) => {
        // 正常返回，处理具体返回参数
        if (event instanceof HttpResponse && event.status === 200) {
          if(event.body.code!==200){
            return throwError(event.body)
          }
        }
        return of(event);
      }),
      catchError((error: HttpErrorResponse) => {
         return  this.handleData(error);
      })
    )
  }
  private handleData(
    body: any,
  ): Observable<any> {
      if(!body||!body.code){
        this.presentToast('请求服务器错误');
        return throwError('请求服务器错误')
      }
    // 业务处理：一些通用操作
      switch (body && body.code) {
        case 900401:
            // token失效
            this.presentToast(body.text);
            location.href=environment.loginUrl;
            return throwError(body)
        default:
            // 业务层级错误处理
            this.presentToast(body.text);
            return throwError(body)
       }
     
  }
  private presentToast(msg) {
    console.log(msg)
    // this.message.create('error', msg);
  }
  
}
