import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NavbarComponent } from './componenti/navbar/navbar.component';
import { BigHeroComponent } from './componenti/big-hero/big-hero.component';
import { ContactFooterComponent } from './componenti/contact-footer/contact-footer.component';
import { AboutComponent } from './componenti/about/about.component';
import { ImageSliderSideComponent } from './componenti/about/image-slider-side/image-slider-side.component';
import { CurriculumComponent } from './componenti/curriculum/curriculum.component';
import { PortfolioComponent } from './componenti/portfolio/portfolio.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BigHeroComponent,
    ContactFooterComponent,
    AboutComponent,
    ImageSliderSideComponent,
    CurriculumComponent,
    PortfolioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
