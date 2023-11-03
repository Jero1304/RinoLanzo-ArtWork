import { Component, OnInit } from '@angular/core';
import { ImageService } from 'src/app/service/image.service';

@Component({
  selector: 'app-opera-dettaglio',
  templateUrl: './opera-dettaglio.component.html',
  styleUrls: ['./opera-dettaglio.component.sass']
})
export class OperaDettaglioComponent implements OnInit{
  selectedOpera: string = '';

  constructor(private imageService: ImageService) {}

  ngOnInit() {
    this.imageService.getSelectedOpera().subscribe((operaPath) => {
      this.selectedOpera = operaPath;
      console.log(this.selectedOpera);
    });
  }
}
