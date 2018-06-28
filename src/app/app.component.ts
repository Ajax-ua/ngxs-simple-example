import { Component, HostListener, OnInit } from '@angular/core';

//import { ApplicationService } from './core/services';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  //@HostListener('window:resize', ['$event'])
  //onResize(event) {
  //  const appWidth = event.target.innerWidth;
  //  this.appService.updateAppWidth(appWidth);
  //}

  constructor (
    //private appService: ApplicationService,
  ) {
  }

  ngOnInit() {
    //this.appService.updateAppWidth(window.innerWidth);
  }
}
