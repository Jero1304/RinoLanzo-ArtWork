// navbar.component.ts

import { Component } from '@angular/core';
import { DarkModeService } from 'src/app/service/dark-mode.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass'],
})
export class NavbarComponent {
  homepage: boolean = true;
  curriculum: boolean = false;
  portfolio: boolean = false;

  darkMode: boolean = false;
  
  constructor(private darkModeService: DarkModeService) {}

  disabledItem(itemName: string) {
    this.homepage = itemName === 'homepage';
    this.curriculum = itemName === 'curriculum';
    this.portfolio = itemName === 'portfolio';
  }

  toggleDarkMode() {
    this.darkMode = !this.darkMode;
    this.darkModeService.setDarkMode(this.darkMode);
  }
}
