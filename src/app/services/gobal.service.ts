import { Injectable } from '@angular/core';
import { Observable, Subject,BehaviorSubject } from 'rxjs';
import {HttpService} from '../services/http.service'
@Injectable({
  providedIn: 'root'
})
export class GobalService {

  constructor(private http:HttpService) { }

  /**
   * 搜索词
   */
  public searchValue = new Subject<string>();
  // public searchValue = new BehaviorSubject<string>('');

  getSearchValue(): Observable<any> {
      return this.searchValue.asObservable();
  }
  /**
   *
   * @param message string 搜索词
   */
  setSearchValue(message: string) {
    this.searchValue.next( message);
  }

  /* clearSearchValue() {
    this.searchValue.next('');
  } */

  
  

  /**
   * 获取智能推荐结果
   * @param keysword string 搜索词
   */
  getSearchList(keysword) {
    return this.http.post('/articleSearch/getSearchRecommend',{keysword})
  }
   /**
   * 热词推荐
   */
  selectHotWorks(){
    return this.http.post('/articleSearch/selectHotWorks')
  }
}
