import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './componenti/about/about.component';
import { CurriculumComponent } from './componenti/curriculum/curriculum.component';
import { PortfolioComponent } from './componenti/portfolio/portfolio.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/homepage' },
  { path: 'homepage', component: AboutComponent },
  { path: 'curriculum-vitae', component: CurriculumComponent },
  { path: 'galleria', component: PortfolioComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
