import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AppContent } from 'src/app/shared/content';

@Component({
  selector: 'app-world',
  templateUrl: './world.component.html',
  styleUrls: ['./world.component.scss']
})
export class WorldComponent  implements OnInit{

  appContent = new AppContent();
  world: any; 
  selectedVideo: any;

  constructor(private modalService : NgbModal){}
  
  ngOnInit(): void {
    this.world = this.appContent.appContent.world;
  }

  openVideo(content : any, video : any){
    this.selectedVideo = video;
    this.modalService.open(content, { fullscreen: true, scrollable: true });
  }
}
