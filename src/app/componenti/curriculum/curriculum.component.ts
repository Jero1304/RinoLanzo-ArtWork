import { Component } from '@angular/core';
import { DarkModeService } from 'src/app/service/dark-mode.service';

@Component({
  selector: 'app-curriculum',
  templateUrl: './curriculum.component.html',
  styleUrls: ['./curriculum.component.sass'],
})
export class CurriculumComponent {
  darkMode: boolean = false;

  constructor(private darkModeService: DarkModeService) {}
  getDark() {
    this.darkModeService.darkMode$.subscribe((value) => {
      this.darkMode = value;
      console.log('portfolio Dark Mode:', this.darkMode);
    });
    return this.darkMode;
  }
}
