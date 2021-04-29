import { Component, OnInit, Input, OnChanges, SimpleChanges, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-ip-info',
  templateUrl: './ip-info.component.html',
  styleUrls: ['./ip-info.component.css']
})

export class IpInfoComponent implements OnInit, OnChanges {
  ipAddress:string = "";
  ipLocation:string = "";
  ipTimezone:string = "";
  ipISP:string = "";

  constructor() {
    this.ipSearchLoading = false;
    this.ipInfoReady = false;
    this.ipInfo = [];
  }

  @Input() ipSearchLoading: boolean;
  @Input() ipInfoReady: boolean;
  @Input() ipInfo:Array<string>;

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges) {
    for(let prop in changes) {
      if(prop === 'ipInfo') {
        // console.log('Previous:', changes[prop].previousValue);
        // console.log('Current:', changes[prop].currentValue);
        // console.log('firstChange:', changes[prop].firstChange);

        if(changes[prop].currentValue !== undefined && Object.keys(changes[prop].currentValue).length >= 1) {
          this.ipAddress = changes[prop].currentValue["ip"];
          this.ipLocation = changes[prop].currentValue["location"].city + ", " +
                            changes[prop].currentValue["location"].region + " " +
                            changes[prop].currentValue["location"].postalCode;
          this.ipTimezone = changes[prop].currentValue["location"].timezone;
          this.ipISP = changes[prop].currentValue.isp;
        }
      }
    }
  }

}
