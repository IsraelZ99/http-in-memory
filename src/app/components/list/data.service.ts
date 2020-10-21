import { Injectable } from '@angular/core';
import { CityI } from "../../models/city/city.interface";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private urlAPI = 'api/cities';

  constructor(private http: HttpClient) { }

  getAllCities(): Observable<CityI[]> {
    return this.http.get<CityI[]>(this.urlAPI);
  }
}
