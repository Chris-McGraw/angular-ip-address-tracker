import { Component, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements AfterViewInit {
  makeMap(): void {
    var map = L.map("map-container", {
      zoomControl: false
    }).setView([47.622868, -122.336553], 17);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
    }).addTo(map);

    var posIcon = L.icon({
      iconUrl: "/assets/images/icon-location.svg",
      iconSize: [44, 55],
      iconAnchor: [22, 56]
    });

    L.marker([47.622868, -122.336553], {
      icon: posIcon
    }).addTo(map);
  }

  constructor() { }

  ngAfterViewInit(): void {
    this.makeMap();
  }

}
