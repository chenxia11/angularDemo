import { Component, OnInit } from '@angular/core';
import { GobalService } from '../../services/gobal.service';
@Component({
  selector: 'app-children4',
  templateUrl: './children4.component.html',
  styleUrls: ['./children4.component.css']
})
export class Children4Component implements OnInit {
  public list:any[]=[];
  constructor(private gobal:GobalService) { }

  ngOnInit() {
    this.gobal.selectHotWorks().subscribe((data)=>{
      this.list=data.data||[]
    })
  }
  handleToSearch(value){
    this.gobal.setSearchValue(value)
  }
}
