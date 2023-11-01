import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CollaboratorsComponent } from './features/collaborators/collaborators.component';
import { CompanyComponent } from './features/company/company.component';
import { HomeComponent } from './features/home/home.component';
import { InvestmentComponent } from './features/investment/investment.component';
import { PortfolioComponent } from './features/portfolio/portfolio.component';
import { WorldComponent } from './features/world/world.component';
import { SiteLayoutComponent } from './shared/site-layout/site-layout.component';

const routes: Routes = [
  {
    path: '',
    component: SiteLayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'company',
        component: CompanyComponent
      },
      {
        path: 'portfolio',
        component: PortfolioComponent
      },
      {
        path: 'collaborators',
        component: CollaboratorsComponent
      },
      {
        path: 'investment',
        component: InvestmentComponent
      },
      {
        path: 'our-world',
        component: WorldComponent
      }
    ],
  },
  { path: '', component: AppComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
