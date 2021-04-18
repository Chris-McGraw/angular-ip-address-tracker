import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-ip-search',
  templateUrl: './ip-search.component.html',
  styleUrls: ['./ip-search.component.css']
})
export class IpSearchComponent implements OnInit {

  testClick() {
    if(this.ipSearchLoading === false) {
      console.log("btn clicked");
      this.emitStart();
    }
  }

  constructor() {
    this.ipSearchLoading = false;
    this.ipInfoReady = false;
  }

  @Input() ipSearchLoading: boolean;
  @Input() ipInfoReady: boolean;

  @Output() startEmitTest: EventEmitter<boolean> = new EventEmitter();
  @Output() ipInfoReadyStatusChange: EventEmitter<boolean> = new EventEmitter();

  emitStart() {
    this.ipSearchLoading = true;
    this.startEmitTest.emit(this.ipSearchLoading);

    setTimeout(() => {
      console.log("~~~ Ip Info Test Loaded ~~~");

      this.ipInfoReady = true;
      this.ipInfoReadyStatusChange.emit(this.ipInfoReady);

      this.ipSearchLoading = false;
      this.startEmitTest.emit(this.ipSearchLoading);
    }, 3000);
  }

  ngOnInit(): void {
  }

}
