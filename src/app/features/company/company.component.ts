import { Component, OnInit } from '@angular/core';
import { AppContent } from 'src/app/shared/content';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit{
  

  appContent = new AppContent();
  company: any;

  ngOnInit(): void {
    this.company = this.appContent.appContent.company;
  }

}
