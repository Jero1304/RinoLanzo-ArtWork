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
  chunkRange = 3;
  operaDefault = false;
  selectedOpera: any = null;
  paginatorIndex = 0;

  constructor(private imageService: ImageService) {}

  ngOnInit(): void {
    this.images = this.imageService.getImage();
    this.chunkedImages = this.chunkArray(this.chunkRange);
  }

  chunkArray(chunkSize: number): any[][] {
    const results = [];
    for (let i = 0; i < this.images.length; i += chunkSize) {
      // console.log(this.images.slice(i, i + chunkSize));
      results.push(this.images.slice(i, i + chunkSize));
    }
    // console.log(results);
    return results;
  }

  nextSlide() {
    this.currentIndex++;
    if (this.currentIndex >= this.chunkedImages.length) {
      this.currentIndex = 0;
    }
    this.chunkedImages = this.chunkArray(this.chunkRange);
  }

  previusSlide() {
    this.currentIndex--;
    if (this.currentIndex < 0) {
      this.currentIndex = this.chunkedImages.length - 1;
    }
    this.chunkedImages = this.chunkArray(this.chunkRange);
  }

  currentOpera(imageChunk: any) {
    const operaPath = imageChunk.path;
    this.imageService.setSelectedOpera(operaPath);
    this.operaDefault = true;
    this.selectedOpera = operaPath;
  }

  changePage(currentPage: number) {
    this.currentIndex = currentPage;
    console.log(this.currentIndex);
    this.paginatorIndex = this.calculatePaginatorIndex(currentPage);
  }

  changePaginatorPage(paginatorIndex: number) {
    this.paginatorIndex = paginatorIndex;
    console.log(this.paginatorIndex);
  }

  paginatorSlice() {
    const totalChunks = this.chunkedImages.length;
    const pagesToShow = 5;
    let startPage = Math.max(
      0,
      this.currentIndex - Math.floor(pagesToShow / 2)
    );
    let endPage = startPage + pagesToShow - 1;

    if (endPage >= totalChunks) {
      endPage = totalChunks - 1;
      startPage = Math.max(0, endPage - (pagesToShow - 1));
    }

    return Array.from(
      { length: endPage - startPage + 1 },
      (_, i) => startPage + i
    );
  }

  nextPaginator() {
    this.currentIndex++;
    if (this.currentIndex >= this.chunkedImages.length) {
      this.currentIndex = 0;
    }
    this.paginatorIndex = this.calculatePaginatorIndex(this.currentIndex);
    this.chunkedImages = this.chunkArray(this.chunkRange);
  }

  previusPaginator() {
    this.currentIndex--;
    if (this.currentIndex < 0) {
      this.currentIndex = this.chunkedImages.length - 1;
    }
    this.paginatorIndex = this.calculatePaginatorIndex(this.currentIndex);
    this.chunkedImages = this.chunkArray(this.chunkRange);
  }
  calculatePaginatorIndex(currentPage: number) {
    const totalChunks = this.chunkedImages.length;
    const pagesToShow = 5;
    let startPage = Math.max(0, currentPage - Math.floor(pagesToShow / 2));
    let endPage = startPage + pagesToShow - 1;

    if (endPage >= totalChunks) {
      endPage = totalChunks - 1;
      startPage = Math.max(0, endPage - (pagesToShow - 1));
    }

    return startPage;
  }
}
