import { Component, OnInit } from '@angular/core';
import { ImageService } from 'src/app/service/image.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.sass'],
})
export class PortfolioComponent {
  images: any[] = [];
  constructor(private imageService: ImageService) {}

  ngOnInit(): void {
    this.images = this.imageService.getImage();
    console.log(this.images);
  }
}
