import { Component, OnInit } from '@angular/core';
import { GobalService } from '../../services/gobal.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-children3',
  templateUrl: './children3.component.html',
  styleUrls: ['./children3.component.css']
})
export class Children3Component implements OnInit {

  private subscription: Subscription;
  public searchValue:string;
  constructor(private gobal:GobalService) { }

  ngOnInit() {
    this.subscription =this.gobal.getSearchValue().subscribe( 
      (value:string)=>{
       this.searchValue= value
    })
  }

  ngOnDestroy() {
    // 取消订阅
    this.subscription.unsubscribe();
  }

}
