import { Component } from '@angular/core';
import { DarkModeService } from 'src/app/service/dark-mode.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.sass'],
})
export class AboutComponent {
  darkMode: boolean = false;

  constructor(private darkModeService: DarkModeService) {}
  getDark() {
    this.darkModeService.darkMode$.subscribe((value) => {
      this.darkMode = value;
    });
    return this.darkMode;
  }
}
