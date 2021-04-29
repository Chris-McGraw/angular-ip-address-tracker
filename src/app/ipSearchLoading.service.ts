import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class IpSearchLoadingService {
  ipSearchLoading:boolean;
  statusChange: Subject<boolean> = new Subject<boolean>();

  constructor() {
    this.ipSearchLoading = true;
  }

  setStatusReady() {
    this.ipSearchLoading = false;
    // console.log("ipSearchLoading = " + this.ipSearchLoading);
    this.statusChange.next(this.ipSearchLoading);
  }
}
