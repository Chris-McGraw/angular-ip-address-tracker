import { Component, OnInit } from '@angular/core';

import { GeoIpApiService } from './geoIpApi.service';
import { IpSearchLoadingService } from './ipSearchLoading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'Angular IP Address Tracker';
  ipSearchLoading:boolean;
  ipInfoReady:boolean = false;

  constructor(private geoIpApiService: GeoIpApiService, private ipSearchLoadingService: IpSearchLoadingService ) {
    this.ipSearchLoading = ipSearchLoadingService.ipSearchLoading;

    ipSearchLoadingService.statusChange.subscribe((value) => {
      this.ipSearchLoading = value;
    });
  }

  ngOnInit() {
    // this.geoIpApiService.getApiResponse();
  }

  startEmitTestHandler(ipSearchLoading: boolean) {
    this.ipSearchLoading = ipSearchLoading;
  }

  ipInfoReadyStatusChangeHandler(ipInfoReady: boolean) {
    this.ipInfoReady = ipInfoReady;
  }
}
