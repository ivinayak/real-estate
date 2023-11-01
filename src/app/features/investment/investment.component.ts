import { Component, OnInit } from '@angular/core';
import { AppContent } from 'src/app/shared/content';

@Component({
  selector: 'app-investment',
  templateUrl: './investment.component.html',
  styleUrls: ['./investment.component.scss']
})
export class InvestmentComponent implements OnInit{

  appContent = new AppContent();
  investment: any;

  ngOnInit(): void {
    this.investment = this.appContent.appContent.investment;
  }

}
