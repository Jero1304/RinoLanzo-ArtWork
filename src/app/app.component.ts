import { Component, OnInit } from '@angular/core';
import { DarkModeService } from './service/dark-mode.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent implements OnInit {
  title = 'RinoLanzo-ArtWork';
  darkMode: boolean = false;

  constructor(private darkModeService: DarkModeService) {}

  ngOnInit() {
    this.darkModeService.darkMode$.subscribe((value) => {
      this.darkMode = value;
      // console.log('AppComponent Dark Mode:', this.darkMode);
    });
  }
}
