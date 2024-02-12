import { Component } from '@angular/core';
import { SidemenuService } from './services/sidemenu/sidemenu.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bms';

  constructor(public sidebarService: SidemenuService) { }

  
  
  
}
