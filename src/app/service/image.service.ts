import { Injectable } from '@angular/core';
import { images } from '../data/image';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ImageService {
  selectedOpera: BehaviorSubject<string> = new BehaviorSubject<string>('');
  constructor() { }

  getImage(){
    return images
  }

  setSelectedOpera(operaPath: string) {
    this.selectedOpera.next(operaPath);
  }

  getSelectedOpera() {
    return this.selectedOpera.asObservable();
  }
}
