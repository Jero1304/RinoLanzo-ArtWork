import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass'],
})
export class NavbarComponent {
  homepage: boolean = true;
  curriculum: boolean = false;
  portfolio: boolean = false;

  disabledItem(itemName: string) {
    this.homepage = itemName === 'homepage';
    this.curriculum = itemName === 'curriculum';
    this.portfolio = itemName === 'portfolio';
  }
}
