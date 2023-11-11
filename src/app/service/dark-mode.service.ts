import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DarkModeService {
  public darkModeSubject = new BehaviorSubject<boolean>(false);
  darkMode$: Observable<boolean> = this.darkModeSubject.asObservable();

  setDarkMode(value: boolean) {
    this.darkModeSubject.next(value);
    console.log('Dark Mode Service:', this.darkModeSubject.value);
  }

  getDarkMode(): boolean {
    return this.darkModeSubject.value;
  }
}
