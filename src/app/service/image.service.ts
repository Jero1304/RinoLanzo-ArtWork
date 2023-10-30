import { Injectable } from '@angular/core';
import { images } from '../data/image'
@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor() { }

  getImage(){
    return images
  }
}
