import { Component, OnInit } from '@angular/core';
import { ImageService } from 'src/app/service/image.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.sass'],
})
export class PortfolioComponent {
  images: any[] = [];
  chunkedImages: any;
  currentIndex = 0;
  chunkRange = 6
  constructor(private imageService: ImageService) {}

  ngOnInit(): void {
    this.images = this.imageService.getImage();
    this.chunkedImages = this.chunkArray(this.chunkRange, this.currentIndex);
  }

  chunkArray(chunkSize: number, index: number): any[][] {
    const results = [];
    for (let i = 0; i < this.images.length; i += chunkSize) {
      // console.log(this.images.slice(i, i + chunkSize));
      results.push(this.images.slice(i, i + chunkSize));
    }
    console.log(results[index]);
    return results;
  }

  nextSlide() {
    this.currentIndex++;
    if (this.currentIndex >= this.chunkedImages.length) {
      this.currentIndex = 0;
    }
    this.chunkedImages = this.chunkArray(this.chunkRange, this.currentIndex);
  }

  previusSlide() {
    this.currentIndex--;
    if (this.currentIndex < 0) {
      this.currentIndex = this.chunkedImages.length - 1;
    }
    this.chunkedImages = this.chunkArray(this.chunkRange, this.currentIndex);
  }
}
