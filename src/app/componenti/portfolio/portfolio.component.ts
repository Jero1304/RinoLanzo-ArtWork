import { Component, OnInit } from '@angular/core';
import { DarkModeService } from 'src/app/service/dark-mode.service';
import { ImageService } from 'src/app/service/image.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.sass'],
})
export class PortfolioComponent implements OnInit {
  images: any[] = [];
  chunkedImages: any;
  currentIndex = 0;
  chunkRange = 3;
  operaDefault = false;
  selectedOpera: any = '';
  operaPosition: any = {};
  operaSelectionError: boolean;
  paginatorIndex = 0;
  firstPage: boolean = false;
  lastPage: boolean = true;
  scrollDownActive: boolean = false;
  isAnimating: boolean = false;
  isAnimatingArrowLeft: boolean = false;
  isAnimatingArrowRight: boolean = false;
  isAnimatingLastOpera: boolean = false;

  darkMode: boolean = false;

  constructor(
    private imageService: ImageService,
    private darkModeService: DarkModeService
  ) {}

  ngOnInit(): void {
    this.images = this.imageService.getImage();
    this.chunkedImages = this.chunkArray(this.chunkRange);
    this.getDark();
  }

  getDark() {
    this.darkModeService.darkMode$.subscribe((value) => {
      this.darkMode = value;
      // console.log('portfolio Dark Mode:', this.darkMode);
    });
    return this.darkMode;
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

  currentOpera(imageChunk: any, index: any) {
    const operaPath = imageChunk.path;
    this.imageService.setSelectedOpera(operaPath);
    this.operaDefault = true;
    this.selectedOpera = operaPath;
    this.operaPosition = {
      image: this.selectedOpera,
      positionChunk: index,
      position: this.currentIndex,
    };
  }
  lastOpera() {
    this.isAnimatingLastOpera = false;

    if (this.selectedOpera == '' || this.selectedOpera == null) {
      this.operaSelectionError = true;
      this.isAnimatingLastOpera = false;
      this.isAnimating = false;
      // console.log(this.selectedOpera);
    }

    setTimeout(() => {
      if (this.selectedOpera != '') {
        this.operaSelectionError = false;
        if (this.operaPosition.position >= 0) {
          this.changePage(this.operaPosition.position);
        }
        if (this.operaPosition.position == this.currentIndex) {
          this.isAnimatingLastOpera = false;
          this.isAnimating = false;
        }
      }
      setTimeout(() => {
        this.isAnimatingLastOpera = false;
        this.isAnimating = false;
      }, 300);
    }, 300);

    // console.log(this.isAnimatingLastOpera);
  }

  isSelectedOpera() {
    this.selectedOpera = '';
  }

  changePage(currentPage: number) {
    if (this.isAnimating) return;
    this.isAnimating = true;

    this.chunkedImages = this.chunkArray(this.chunkRange);

    setTimeout(() => {
      this.currentIndex = currentPage; // Imposta il nuovo indice
      this.paginatorIndex = this.calculatePaginatorIndex(currentPage);

      this.chunkedImages = this.chunkArray(this.chunkRange);

      setTimeout(() => {
        this.isAnimating = false;
      }, 300);
    }, 300);
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
    if (this.isAnimating) return;
    this.isAnimating = true;
    this.isAnimatingArrowRight = true;

    setTimeout(() => {
      this.currentIndex++;
      if (this.currentIndex >= this.chunkedImages.length) {
        this.currentIndex = 0;
      }
      this.paginatorIndex = this.calculatePaginatorIndex(this.currentIndex);

      this.chunkedImages = this.chunkArray(this.chunkRange);

      setTimeout(() => {
        this.isAnimating = false;
        this.isAnimatingArrowRight = false;
      }, 300);
    }, 300);
  }

  previusPaginator() {
    if (this.isAnimating) return;
    this.isAnimating = true;
    this.isAnimatingArrowLeft = true;

    setTimeout(() => {
      this.currentIndex--;
      if (this.currentIndex < 0) {
        this.currentIndex = this.chunkedImages.length - 1;
      }
      this.paginatorIndex = this.calculatePaginatorIndex(this.currentIndex);

      this.chunkedImages = this.chunkArray(this.chunkRange);

      setTimeout(() => {
        this.isAnimating = false;
        this.isAnimatingArrowLeft = false;
      }, 300);
    }, 300);
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

    if (startPage >= 1) {
      this.firstPage = true;
    } else {
      this.firstPage = false;
    }

    if (this.chunkedImages.length - 1 > endPage) {
      this.lastPage = true;
    } else {
      this.lastPage = false;
    }

    return startPage;
  }

  firstChunk() {
    this.isAnimating = true;
    setTimeout(() => {
      this.currentIndex = 0;
      this.paginatorIndex = this.calculatePaginatorIndex(0);
      this.chunkedImages = this.chunkArray(this.chunkRange);
      this.isAnimating = true;

      setTimeout(() => {
        this.isAnimating = false;
      }, 300);
    }, 300);
  }
  lastChunk() {
    this.isAnimating = true;
    setTimeout(() => {
      this.currentIndex = this.chunkedImages.length - 1;
      this.paginatorIndex = this.calculatePaginatorIndex(this.currentIndex);
      this.chunkedImages = this.chunkArray(this.chunkRange);
      this.isAnimating = true;

      setTimeout(() => {
        this.isAnimating = false;
      }, 300);
    }, 300);
  }

  scrollDownToOperaDettaglio() {
    const element = document.getElementById('opera-dettaglio');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
