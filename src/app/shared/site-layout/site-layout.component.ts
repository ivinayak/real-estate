import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-site-layout',
  templateUrl: './site-layout.component.html',
  styleUrls: ['./site-layout.component.scss']
})
export class SiteLayoutComponent implements OnInit{

  topBarList: string[] = ['company', 'investment', 'portfolio', 'our-world', 'collaborators'];
  initurl: any;
  urlSplit: any;

  constructor(
    private router: Router, 
    private modalService: NgbModal,
    private activatedRoute: ActivatedRoute){
      this.activatedRoute.url.subscribe(activeUrl => {
        this.initurl = window.location.pathname;
        this.urlSplit = this.initurl.split('/');
      });
    }


  ngOnInit(): void {
    this.router.events.subscribe((e: any) => {
      if (e instanceof NavigationEnd) {
        this.initurl = e.url;
        this.urlSplit = e.url.split('/');
      }
    });
  }

  goTo(page: string){
    this.modalService.dismissAll();
    this.router.navigate([page]);
  }
  
  openMenu(content:any){
    this.modalService.open(content, { fullscreen: true });
  }
}
