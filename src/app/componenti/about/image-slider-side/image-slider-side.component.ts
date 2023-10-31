import { Component, OnInit } from '@angular/core';
import { ImageService } from 'src/app/service/image.service';

@Component({
  selector: 'app-image-slider-side',
  templateUrl: './image-slider-side.component.html',
  styleUrls: ['./image-slider-side.component.sass']
})
export class ImageSliderSideComponent implements OnInit {
  images: any[] = [];
  currentIndex = 0;

  constructor(private imageService: ImageService) {}

  ngOnInit(): void {
    this.images = this.imageService.getImage();
    this.startImageSlider();
  }

  startImageSlider() {
    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    }, 5000);
  }

  // Aggiungi un metodo per gestire il passaggio a un'immagine successiva
  nextImage() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }
}
