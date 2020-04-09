import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { Imarker } from '../side-bar/marker.component';
import { SideBarComponent } from '../side-bar/side-bar.component';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  lat: number = 49.2327805;
  lng: number = 28.4809704;
  defaultLabel: string = 'Vinnytsa';
  zoom: number = 10;

  constructor() { }

  ngOnInit(): void {
  }

  onMarkerClicked(marker : any): void {
    this.lat = marker.lat;
    this.lng = marker.lng;
    this.defaultLabel = marker.label;
    this.zoom = 17;
  }

}
