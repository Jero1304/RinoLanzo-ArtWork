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
  constructor(private imageService: ImageService) {}

  ngOnInit(): void {
    this.images = this.imageService.getImage();
    this.chunkedImages = this.chunkArray(5, this.currentIndex);
  }

  chunkArray(chunkSize: number, index: number): any[][] {
    const results = [];
    console.log(this.images.slice(index, index + chunkSize));
    results.push(this.images.slice(index, index + chunkSize));
    console.log(results);
    return results;
  }

  nextSlide() {
    this.currentIndex = this.currentIndex + 5;
    this.chunkedImages = this.chunkArray(5, this.currentIndex);
  }
  previusSlide() {
    this.currentIndex = this.currentIndex - 5;
    this.chunkedImages = this.chunkArray(5, this.currentIndex);
  }
}
