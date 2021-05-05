import { Component, OnInit } from '@angular/core';

import { GeoIpApiService } from './geoIpApi.service';
import { IpSearchLoadingService } from './ipSearchLoading.service';
import { IpInfoService } from './ipInfo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'Angular IP Address Tracker';
  ipSearchLoading:boolean;
  ipInfoReady:boolean;
  ipInfo:Array<string>;

  constructor(private geoIpApiService: GeoIpApiService, private ipSearchLoadingService: IpSearchLoadingService, private ipInfoService: IpInfoService ) {
    this.ipSearchLoading = ipSearchLoadingService.ipSearchLoading;

    ipSearchLoadingService.statusChange.subscribe((value) => {
      this.ipSearchLoading = value;
    });

// ---

    this.ipInfoReady = ipInfoService.ipInfoReady;

    ipInfoService.statusChange.subscribe((value) => {
      this.ipInfoReady = value;
    });

// ---

    this.ipInfo = ipInfoService.ipInfo;

    ipInfoService.infoArrayChange.subscribe((value) => {
      this.ipInfo = value;
    });
  }

  ngOnInit() {
    // this.geoIpApiService.getApiResponse();
  }

  ipSearchLoadingStatusChangeHandler(ipSearchLoading: boolean) {
    this.ipSearchLoading = ipSearchLoading;
  }

  ipInfoReadyStatusChangeHandler(ipInfoReady: boolean) {
    this.ipInfoReady = ipInfoReady;
  }
}
