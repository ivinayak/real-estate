
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule, NgbScrollSpyModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import { NgModule } from '@angular/core';
import { SiteLayoutComponent } from './shared/site-layout/site-layout.component';
import { CompanyComponent } from './features/company/company.component';
import { PortfolioComponent } from './features/portfolio/portfolio.component';
import { InvestmentComponent } from './features/investment/investment.component';
import { CollaboratorsComponent } from './features/collaborators/collaborators.component';
import { WorldComponent } from './features/world/world.component';
import { HomeComponent } from './features/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    SiteLayoutComponent,
    CompanyComponent,
    PortfolioComponent,
    InvestmentComponent,
    CollaboratorsComponent,
    WorldComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MatIconModule,
    NgbScrollSpyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
