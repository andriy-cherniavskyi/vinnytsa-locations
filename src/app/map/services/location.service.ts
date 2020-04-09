import { Injectable } from '@angular/core';
import { Imarker } from '../../side-bar/marker.component';
import { HttpClientModule, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Injectable()
export class LocationService {
    private _locationsUrl = './assets/api/locations/locations.json';


    constructor(private _http: HttpClient) {}

    getLocations(): Observable<Imarker[]> {
        return this._http.get<Imarker[]>(this._locationsUrl)
        .do(data => console.log('All' + JSON.stringify(data)))
        .catch(this.handleError);
    }

    private handleError(err: HttpErrorResponse) {
        console.log(err.message);
        return Observable.throw(err.message)
    }
}
