import { Component, OnInit } from '@angular/core';
import { GobalService } from '../../services/gobal.service';
@Component({
  selector: 'app-children2',
  templateUrl: './children2.component.html',
  styleUrls: ['./children2.component.css']
})
export class Children2Component implements OnInit {

  constructor(private gobal:GobalService) { }

  ngOnInit() {
    this.gobal.setSearchValue('我是子路由2')
  }

}
