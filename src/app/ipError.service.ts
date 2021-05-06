import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class IpErrorService {
  ipError:boolean = false;
  statusChange: Subject<boolean> = new Subject<boolean>();

  ipErrorMsg:string = "";
  msgChange: Subject<string> = new Subject<string>();

  constructor() {}

  setStatus(status:boolean) {
    this.ipError = status;
    this.statusChange.next(this.ipError);
  }

  setErrorMsg(msg:string) {
    this.ipErrorMsg = msg;
    this.msgChange.next(this.ipErrorMsg);
  }
}
