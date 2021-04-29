import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class IpInfoService {
  ipInfoReady:boolean;
  statusChange: Subject<boolean> = new Subject<boolean>();

  ipInfo:Array<string>;
  infoArrayChange: Subject<Array<string>> = new Subject<Array<string>>();

  constructor() {
    this.ipInfoReady = false;
    this.ipInfo = [];
  }

  setStatusReady() {
    this.ipInfoReady = true;
    this.statusChange.next(this.ipInfoReady);
    // console.log("ipInfoReady = " + this.ipInfoReady);
  }

  setNewIpInfo(data:Array<string>) {
    this.ipInfo = data;
    this.infoArrayChange.next(this.ipInfo);
    // console.log(this.ipInfo);
  }
}
