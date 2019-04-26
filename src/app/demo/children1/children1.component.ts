import { Component, OnInit } from '@angular/core';
import { GobalService } from '../../services/gobal.service';
@Component({
  selector: 'app-children1',
  templateUrl: './children1.component.html',
  styleUrls: ['./children1.component.css']
})
export class Children1Component implements OnInit {

  constructor(private gobal:GobalService) { }

  ngOnInit() {
    this.gobal.setSearchValue('我是子路由1')
  }

}
