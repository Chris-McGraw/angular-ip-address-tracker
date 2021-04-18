import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular IP Address Tracker';
  nowLoading:boolean = false;

  startEmitTestHandler(nowLoading: boolean) {
    this.nowLoading = nowLoading;
  }
}
