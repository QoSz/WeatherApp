import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from '../../environments/environment';
import { WeatherData } from '../models/weather.models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getWeatherData(cityName: string): Observable<WeatherData> {
    return this.http.get<WeatherData>(environment.weatherApiBaseUrl + cityName, {
      headers: new HttpHeaders({
        [environment.XRapidAPIHostHeaderName]: environment.XRapidAPIHostHeaderValue,
        [environment.XRapidAPIKeyHeaderName]: environment.XRapidAPIKeyHeaderValue
      })
    });
  }
}
