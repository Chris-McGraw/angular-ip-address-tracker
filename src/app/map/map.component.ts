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
      zoomControl: false,
      minZoom: 2
    }).setView([20, -95], 2);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors",
    }).addTo(map);

    var posIcon = L.icon({
      iconUrl: "/assets/images/icon-location.svg",
      iconSize: [44, 55],
      iconAnchor: [22, 56]
    });

    // L.marker([47.622868, -122.336553], {
    //   icon: posIcon
    // }).addTo(map);

// ---

    // setTimeout(() => {
    //   L.marker([47.622868, -122.336553], {
    //     icon: posIcon
    //   }).addTo(map);
    //
    //   map.setView([47.622868, -122.336553], 2);
    // }, 5000);
    //
    // setTimeout(() => {
    //   map.setView([47.622868, -122.336553], 4.5);
    // }, 6000);
    //
    // setTimeout(() => {
    //   map.setView([47.622868, -122.336553], 7);
    // }, 6500);
    //
    // setTimeout(() => {
    //   map.setView([47.622868, -122.336553], 9.5);
    // }, 7500);
    //
    // setTimeout(() => {
    //   map.setView([47.622868, -122.336553], 12);
    // }, 8000);
    //
    // setTimeout(() => {
    //   map.setView([47.622868, -122.336553], 14.5);
    // }, 9000);
    //
    // setTimeout(() => {
    //   map.setView([47.622868, -122.336553], 17);
    // }, 9500);
  }

  constructor() { }

  ngAfterViewInit(): void {
    this.makeMap();
  }

}
