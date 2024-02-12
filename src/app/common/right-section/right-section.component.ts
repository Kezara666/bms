import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SidemenuService } from 'src/app/services/sidemenu/sidemenu.service';

@Component({
  selector: 'app-right-section',
  templateUrl: './right-section.component.html',
  styleUrls: ['./right-section.component.css']
})
export class RightSectionComponent implements OnInit {
 

  constructor(private sidebarService: SidemenuService) {}

 

  ngOnInit(): void {
  }

  

}
