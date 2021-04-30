import { Component, Input, AfterViewInit, OnChanges, SimpleChanges, SimpleChange } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})

export class MapComponent implements AfterViewInit {
  map:any;
  posIcon:any;
  ipLat:number = 0;
  ipLng:number = 0;

  constructor() {
    this.ipInfo = [];
  }

  @Input() ipInfo:Array<string>;

  makeMap(): void {
    this.map = L.map("map-container", {
      zoomControl: false,
      minZoom: 2
    }).setView([20, -95], 2);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors",
    }).addTo(this.map);

    this.posIcon = L.icon({
      iconUrl: "/assets/images/icon-location.svg",
      iconSize: [44, 55],
      iconAnchor: [22, 56]
    });

    // L.marker([47.622868, -122.336553], {
    //   icon: posIcon
    // }).addTo(map);
  }

  zoomInPos() {
    setTimeout(() => {
      L.marker([this.ipLat, this.ipLng], {
        icon: this.posIcon
      }).addTo(this.map);

      this.map.setView([this.ipLat, this.ipLng], 2);
    }, 0);

    setTimeout(() => {
      this.map.setView([this.ipLat, this.ipLng], 4.5);
    }, 1000);

    setTimeout(() => {
      this.map.setView([this.ipLat, this.ipLng], 7);
    }, 1500);

    setTimeout(() => {
      this.map.setView([this.ipLat, this.ipLng], 9.5);
    }, 2500);

    setTimeout(() => {
      this.map.setView([this.ipLat, this.ipLng], 12);
    }, 3000);

    setTimeout(() => {
      this.map.setView([this.ipLat, this.ipLng], 14.5);
    }, 4000);

    setTimeout(() => {
      this.map.setView([this.ipLat, this.ipLng], 17);
    }, 4500);
  }

  ngAfterViewInit(): void {
    this.makeMap();
  }

  ngOnChanges(changes: SimpleChanges) {
    for(let prop in changes) {
      if(prop === 'ipInfo') {
        // console.log('Previous:', changes[prop].previousValue);
        // console.log('Current:', changes[prop].currentValue);
        // console.log('firstChange:', changes[prop].firstChange);

        if(changes[prop].currentValue !== undefined
        && Object.keys(changes[prop].currentValue).length >= 1) {
          this.ipLat = parseFloat(changes[prop].currentValue["location"].lat);
          this.ipLng = parseFloat(changes[prop].currentValue["location"].lng);

          // console.log(this.ipLat + ", " + this.ipLng);
          this.zoomInPos();
        }
      }
    }
  }

}
