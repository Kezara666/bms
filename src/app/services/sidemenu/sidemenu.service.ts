import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidemenuService {

  constructor() { }

  public isOpen: boolean = false;
  public isDarkMode: boolean=false;

  public selectedMenu: string = "";

  changeSelectedMenu(menu: string) {
    this.selectedMenu = menu;
  }

  getSelectedMenu() {
    return this.selectedMenu;
  }

  
}
