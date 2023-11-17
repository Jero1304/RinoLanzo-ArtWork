import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
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

  constructor(
    private router: Router,
    private darkModeService: DarkModeService
  ) {
    // Ascolta gli eventi di navigazione per aggiornare lo stato dei pulsanti di navigazione
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.updateDisabledState();
      }
    });
  }

  disabledItem(itemName: string) {
    this.router.navigate([itemName]);
  }

  private updateDisabledState() {
    const currentRoute = this.router.url;

    this.homepage = currentRoute === '/homepage';
    this.curriculum = currentRoute === '/curriculum-vitae';
    this.portfolio = currentRoute === '/galleria';
  }

  toggleDarkMode() {
    this.darkMode = !this.darkMode;
    this.darkModeService.setDarkMode(this.darkMode);
  }
}
