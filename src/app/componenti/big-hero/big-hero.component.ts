import { Component, OnInit } from '@angular/core';
import { ImageService } from 'src/app/service/image.service';
@Component({
  selector: 'app-big-hero',
  templateUrl: './big-hero.component.html',
  styleUrls: ['./big-hero.component.sass'],
})
export class BigHeroComponent implements OnInit {
  constructor(private imageService: ImageService) {}
  images: any;

  ngOnInit() {
    this.images = this.imageService.getImage()
  }
}
