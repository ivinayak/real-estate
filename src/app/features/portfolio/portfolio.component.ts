import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AppContent } from 'src/app/shared/content';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit{

  appContent = new AppContent();
  portfolio: any;
  selectedAsset: any;

  constructor(private modalService: NgbModal){}

  ngOnInit(): void {
    this.portfolio = this.appContent.appContent.portfolio;
  }

  openModal(content:any, asset: any){
    this.selectedAsset = asset;
    this.modalService.open(content, { fullscreen: true, scrollable: true });
  }

}
