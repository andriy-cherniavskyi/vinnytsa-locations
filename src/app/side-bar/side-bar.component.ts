import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { Imarker } from './marker.component';
import { LocationService } from '../map/services/location.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {
  @Input() marker: string;
  @Output() markerClicked: EventEmitter<object> = new EventEmitter<object>();

  currentLocation: string = 'Select Location';

  markers: Imarker[] = [];
  errorMessage: string;

  constructor(private _locationService: LocationService) {
  }

  ngOnInit(): void{
    this._locationService.getLocations()
      .subscribe(
        markers => this.markers = markers,
        error => this.errorMessage = (error as any)
      );
  }

  onClick(marker): void {
    this.currentLocation = marker.label;
    this.markerClicked.emit(marker);
  }

}
