import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges, SimpleChange } from '@angular/core';

import { GeoIpApiService } from '../geoIpApi.service';

@Component({
  selector: 'app-ip-search',
  templateUrl: './ip-search.component.html',
  styleUrls: ['./ip-search.component.css']
})

export class IpSearchComponent implements OnInit {
  /* ------ VARIABLES ------ */
  ipSearchError: boolean = false;

  /* ------- INPUTS ------- */
  @Input() ipSearchLoading: boolean = false;
  @Input() ipInfoReady: boolean = false;

  /* ------- OUTPUTS ------- */
  @Output() ipSearchLoadingStatusChange: EventEmitter<boolean> = new EventEmitter();
  @Output() ipInfoReadyStatusChange: EventEmitter<boolean> = new EventEmitter();

  /* ----- CONSTRUCTOR ----- */
  constructor(private geoIpApiService: GeoIpApiService) {}

  /* ------ FUNCTIONS ------ */
  validateIpAddress(address:string) {
    let regexp = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    if (regexp.test(address)) {
      return true;
    }
    else {
      return false;
    }
  }

  validateDomainAddress(address:string) {
    let regexp =  /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/i;

    if(regexp.test(address)) {
      return true
    }
    else {
      return false;
    }
  }

  ipSearchBtnClick(event:any) {
    if(this.ipSearchLoading === false) {
      console.log("");
      console.log("btn clicked");

      if(this.validateIpAddress(event.target.parentElement.children[0].value) ) {
        this.ipSearchError = false;
        this.emitStart();

        // this.geoIpApiService.getApiResponse( event.target.parentElement.children[0].value, "ip" );
      }
      else if(this.validateDomainAddress(event.target.parentElement.children[0].value)) {
        this.ipSearchError = false;
        this.emitStart();

        // this.geoIpApiService.getApiResponse( event.target.parentElement.children[0].value, "domain" );
      }
      else {
        this.ipSearchError = true;
      }
    }
  }

  emitStart() {
    this.ipSearchLoading = true;
    this.ipSearchLoadingStatusChange.emit(this.ipSearchLoading);

    // setTimeout(() => {
    //   console.log("~~~ Ip Info Test Loaded ~~~");
    //
    //   this.ipInfoReady = true;
    //   this.ipInfoReadyStatusChange.emit(this.ipInfoReady);
    //
    //   this.ipSearchLoading = false;
    //   this.ipSearchLoadingStatusChange.emit(this.ipSearchLoading);
    // }, 3000);
  }

  /* --- EVENT HANDLERS --- */
  ngOnInit() {}

}
