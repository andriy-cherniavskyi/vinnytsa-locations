import { Component } from '@angular/core';
import { LocationService } from './map/services/location.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [LocationService]
})
export class AppComponent {
  title = 'vinnytsa-map';

  headerText: string = 'Vinnytsa Locations';
}
