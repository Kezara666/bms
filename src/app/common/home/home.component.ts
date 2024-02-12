import { Component, OnInit } from '@angular/core';
import { SidemenuService } from 'src/app/services/sidemenu/sidemenu.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isSideMenuOpen: boolean =false;

  constructor(public sidebarService:SidemenuService) { }

  ngOnInit(): void {
  }

  onMenuOpened(value:boolean) {
    alert(value);
    this.isSideMenuOpen=value;
    // You can perform additional actions when the side menu is opened
  }

}
