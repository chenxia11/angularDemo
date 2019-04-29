import { Component, OnInit } from '@angular/core';
import { GobalService } from '../../services/gobal.service';
import { Subscription ,Subject,of} from 'rxjs';
import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  private subscription: Subscription;
  private searchTerms = new Subject<string>();
  public list:any[]=[];
  public searchValue:string;
  constructor(private gobal:GobalService) { }

  ngOnInit() {
    this.subscription =this.gobal.getSearchValue().subscribe( 
      (value:string)=>{
       this.searchValue= value
      //  async  (value:string)=>{
      //   this.searchValue=await value
    })
    this.handleRecommend()
  }
  /**
   * 智能推荐
   */
  handleRecommend(){
    this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((keywords: string) => {
          if(!keywords) return of({data:[]})
          return this.gobal.getSearchList(keywords)
      }),
    ).subscribe((data)=>{
        this.list=data.data||[]
    },(err)=>{
      this.handleRecommend();
    })
  }
  handleSearch(e){
    this.searchTerms.next(e.target.value)
  }
  ngOnDestroy() {
    // 取消订阅
    this.subscription.unsubscribe();
  }
}
