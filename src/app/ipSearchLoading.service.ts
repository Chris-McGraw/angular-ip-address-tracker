import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class IpSearchLoadingService {
  ipSearchLoading:boolean;
  statusChange: Subject<boolean> = new Subject<boolean>();

  constructor() {
    // this.ipSearchLoading = true;
    this.ipSearchLoading = false;
  }

  setStatus(status:boolean) {
    this.ipSearchLoading = status;
    this.statusChange.next(this.ipSearchLoading);
    // console.log("ipSearchLoading = " + this.ipSearchLoading);
  }
}
