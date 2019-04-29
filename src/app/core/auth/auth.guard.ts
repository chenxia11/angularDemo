import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate, CanActivateChild , CanLoad, Route} from '@angular/router';
// import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate , CanActivateChild , CanLoad {
  // 要求认证
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
     return this.checkToken(next);
  }
  // 保护子路由
  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.canActivate(route, state);
  }
  // 保护惰性模块的未授权加载
  canLoad(route: Route): boolean {
    const url = `/${route.path}`;
    return this.checkAuth(url);
  }
  // 检查是否有权限
  checkAuth(url: string): boolean {
    return true;
  }
  // 检查是否存在token
  checkToken(next): boolean {
    let token=next.queryParamMap.get("token")
    let proId=next.queryParamMap.get("proId")||'47ea9eec57ee484c8302fb97a9065dc6'
    if(token){
      localStorage.setItem('token',token)
      localStorage.setItem('proId',proId)
      return true;
    }
    token=localStorage.getItem('token')
    if(!token){
      location.href=environment.loginUrl;
      return false
    }
    return true
  }
}
