import { Component, OnInit } from '@angular/core';

import { GeoIpApiService } from './geoIpApi.service';
import { IpSearchLoadingService } from './ipSearchLoading.service';
import { IpInfoService } from './ipInfo.service';
import { IpErrorService } from './ipError.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  /* ------ VARIABLES ------ */
  title = 'Angular IP Address Tracker';
  ipSearchLoading:boolean;
  ipInfoReady:boolean;
  ipInfo:Array<string>;
  ipError:boolean;
  ipErrorMsg:string;

  /* ----- CONSTRUCTOR ----- */
  constructor(private geoIpApiService: GeoIpApiService,
  private ipSearchLoadingService: IpSearchLoadingService,
  private ipInfoService: IpInfoService,
  private ipErrorService: IpErrorService) {
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

    // ---

    this.ipError = ipErrorService.ipError;

    ipErrorService.statusChange.subscribe((value) => {
      this.ipError = value;
    });

    // ---

    this.ipErrorMsg = ipErrorService.ipErrorMsg;

    ipErrorService.msgChange.subscribe((value) => {
      this.ipErrorMsg = value;
    });
  }

  /* ------ FUNCTIONS ------ */
  ipSearchLoadingStatusChangeHandler(ipSearchLoading: boolean) {
    this.ipSearchLoading = ipSearchLoading;
  }

  ipInfoReadyStatusChangeHandler(ipInfoReady: boolean) {
    this.ipInfoReady = ipInfoReady;
  }

  /* --- EVENT HANDLERS --- */
  ngOnInit() {
    // this.geoIpApiService.getApiResponse();
  }

}
