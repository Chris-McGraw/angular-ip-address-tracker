import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { GeoIpApiService } from './geoIpApi.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'Angular IP Address Tracker';
  ipSearchLoading:boolean = false;
  ipInfoReady:boolean = false;

  geoIpApiService;                      //  INITIALIZE SERVICE

  constructor(private http: HttpClient) {
    this.geoIpApiService = new GeoIpApiService(http);
  }

  getReposTest() {
    this.geoIpApiService.getReposTest();
  }

  ngOnInit() {
    // this.getReposTest();
  }

  startEmitTestHandler(ipSearchLoading: boolean) {
    this.ipSearchLoading = ipSearchLoading;
  }

  ipInfoReadyStatusChangeHandler(ipInfoReady: boolean) {
    this.ipInfoReady = ipInfoReady;
  }
}
