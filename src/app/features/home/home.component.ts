import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AppContent } from 'src/app/shared/content';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  appContent = new AppContent();
  homePage: any;
  title = 'real-estate';
  homeVideoPath: string = '../assets/videos/home.mp4';
  homeVideo2Path: string = '../assets/videos/home2.mp4';
  img1Path: string = '../assets/images/img1.jpg';
  img2Path: string = '../assets/images/img2.jpg';
  img3Path: string = '../assets/images/img3.jpg';
  img4Path: string = '../assets/images/img4.jpg';

  video: any;
  numberb: any;
  numbera: any;
  numberc: any;
  numberd: any;
  numbere: any;
  numberf: any;
  initurl: any;
  urlSplit: any;
  
  constructor(private modalService: NgbModal, private router: Router,
    private activatedRoute: ActivatedRoute){

  }

  ngOnInit(): void {

    this.homePage = this.appContent.appContent.homePage;
    this.video = document.getElementById("myVideo");
    this.numbera = document.getElementById("n1");
    this.numberb = document.getElementById("n4");
    this.numberc = document.getElementById("n2");
    this.numberd = document.getElementById("n5");
    this.numbere = document.getElementById("n3");
    this.numberf = document.getElementById("n6");
    this.video.muted = true; 
  }

  toggleMute() {
    this.video.muted = !this.video.muted;
  }

  openMenu(content:any){
    this.modalService.open(content, { fullscreen: true });
  }

  changeLocation($event:any){
    if($event == 'numberArea'){
      this.numbera.innerHTML = 0;
      this.numberb.innerHTML = 0;
      this.numberc.innerHTML = 0;
      this.numberd.innerHTML = 0;
      this.numbere.innerHTML = 0;
      this.numberf.innerHTML = 0;

      this.numbera.innerHTML = this.homePage.odometer1.value;
      this.numberb.innerHTML = this.homePage.odometer1.fraction;
      this.numberc.innerHTML = this.homePage.odometer2.value;
      this.numberd.innerHTML = this.homePage.odometer2.fraction;;
      this.numbere.innerHTML = this.homePage.odometer3.value;
      this.numberf.innerHTML = this.homePage.odometer3.fraction;;   
    }
  }

  goTo(page: string){
    this.modalService.dismissAll();
    this.router.navigate([page]);
  }
}
