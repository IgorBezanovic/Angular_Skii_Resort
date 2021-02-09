import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { SkiPass } from '../model/skiPass.model';
import { SkiResortDescription } from '../model/skiResortDescription.model';

import { SkiResortName } from '../model/skiResortName.model';
import { SkiResortNameSearch } from '../model/skiResortNameSearch.model';
import { TrackList } from '../model/track-list.model';
import { WeatherList } from '../model/weather-list.model';


@Injectable({
  providedIn: 'root'
})
export class SkiResortService {
  url = "http://localhost:3000/api/skiresorts";

  constructor(private http: HttpClient) { }

  getSkiResortsName(): Observable<SkiResortNameSearch> {
    return this.http.get<SkiResortName[]>(this.url).pipe(map(data => {return new SkiResortNameSearch(data)}));
  }

  getDescription(skiId: number): Observable<SkiResortDescription> {
    return this.http.get(`${this.url}/${skiId}`).pipe(map(data => {return new SkiResortDescription(data)}));
  }

  getTracks(skiId:number, params?: any): Observable<TrackList[]> {
    let queryParams = {};
    queryParams = {params: new HttpParams().set('sort', params && params.toString() || '')}
    return this.http.get<TrackList[]>(`${this.url}/${skiId}/tracks`, queryParams); 
  }

  getWeather(skiId: number): Observable<WeatherList[]> {
    return this.http.get<WeatherList[]>(`${this.url}/${skiId}/weather`);
  }

  getSkiPass(skiId: number): Observable<SkiPass[]> {
    return this.http.get<SkiPass[]>(`${this.url}/${skiId}/skipass`);
  }

}
