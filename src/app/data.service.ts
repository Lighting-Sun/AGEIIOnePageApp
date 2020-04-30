import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Civilizations } from './civilizations.model';
import { Units } from './units.model';
import { Structures } from './structures.model'
import { environment } from '../environments/environment'
import { Technologies } from './technologies.model'

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private _http: HttpClient) { }
  getUsers() {
    return this._http.get<Civilizations>(`${environment.v2.api_url}/civilizations`,
    {
      headers: {
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
      }
    }).toPromise();
  }
  getUnits() {
    return this._http.get<Units>(`${environment.v2.api_url}/units`,
    {
      headers: {
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
      }
    }).toPromise();
  }
  getStructures() {
    return this._http.get<Structures>(`${environment.v2.api_url}/structures`,
    {
      headers: {
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
      }
    }).toPromise();
  }
  getTechnologies() {
    return this._http.get<Technologies>(`${environment.v2.api_url}/technologies`,
    {
      headers: {
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
      }
    }).toPromise();
  }
}
