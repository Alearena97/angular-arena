import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { ajax, AjaxResponse } from 'rxjs/ajax';

@Injectable({
  providedIn: 'root'
})

export class WeatherService {
  apiKey: string = "d0475be3a1967b1b49dfc02c8128001a";
  URL: string  =
    "https://api.openweathermap.org/data/2.5/weather?APPID=" +
    this.apiKey +
    "&units=metric&q=";

  constructor() {}

  public getData(CityName: string): Observable<AjaxResponse<any>> {
    return ajax({
      method: 'GET',
      url: this.URL+CityName,
      crossDomain: true,
    });
  }
}
