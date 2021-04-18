import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular IP Address Tracker';
  ipSearchLoading:boolean = false;

  startEmitTestHandler(ipSearchLoading: boolean) {
    this.ipSearchLoading = ipSearchLoading;
  }
}
