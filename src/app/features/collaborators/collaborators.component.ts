import { Component, OnInit } from '@angular/core';
import { AppContent } from 'src/app/shared/content';

@Component({
  selector: 'app-collaborators',
  templateUrl: './collaborators.component.html',
  styleUrls: ['./collaborators.component.scss']
})
export class CollaboratorsComponent implements OnInit{

  appContent = new AppContent();
  collaborators: any;
  
  ngOnInit(): void {
    this.collaborators = this.appContent.appContent.collaborators;
  }

}
