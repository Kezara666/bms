// left-section.component.ts
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { SidemenuService } from 'src/app/services/sidemenu/sidemenu.service';

@Component({
  selector: 'app-left-section',
  templateUrl: './left-section.component.html',
  styleUrls: ['./left-section.component.css']
})
export class LeftSectionComponent implements OnInit {
  @Input() isSideMenuOpen = false;

  constructor(public sidebarService: SidemenuService) { }

  ngOnInit(): void {
  }

  togleDarkMode(){
    this.sidebarService.isDarkMode = !this.sidebarService.isDarkMode;
  }

  toggleSidebar(){
    this.sidebarService.isOpen = !this.sidebarService.isOpen;
  }

  
  


}
