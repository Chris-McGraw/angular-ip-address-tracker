import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-ip-search',
  templateUrl: './ip-search.component.html',
  styleUrls: ['./ip-search.component.css']
})
export class IpSearchComponent implements OnInit {

  testClick() {
    console.log("btn clicked");
    this.emitStart();
  }

  constructor() {
    this.nowLoading = false;
  }

  @Input() nowLoading: boolean;

  @Output() startEmitTest: EventEmitter<boolean> = new EventEmitter();

  emitStart() {
    this.nowLoading = true;
    this.startEmitTest.emit(this.nowLoading);
  }

  ngOnInit(): void {
  }

}
