import { Component, OnInit, Input, OnChanges, SimpleChanges, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-ip-info',
  templateUrl: './ip-info.component.html',
  styleUrls: ['./ip-info.component.css']
})
export class IpInfoComponent implements OnInit, OnChanges {

  constructor() {
    this.ipSearchLoading = false;
  }

  @Input() ipSearchLoading: boolean;

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    // for(let prop in changes) {
    //   if(prop === 'ipSearchLoading') {
    //     console.log('Previous:', changes[prop].previousValue);
    //     console.log('Current:', changes[prop].currentValue);
    //     console.log('firstChange:', changes[prop].firstChange);
    //   }
    // }
  }

}
