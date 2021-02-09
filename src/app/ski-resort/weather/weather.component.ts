import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WeatherList } from 'src/app/model/weather-list.model';
import { SkiResortService } from 'src/app/services/ski-resort.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  weather: WeatherList[];

  constructor(private service: SkiResortService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(newParams => {
      let id = newParams['resortId'];
      this.service.getWeather(id).subscribe(resp => {
        this.weather = resp;
        console.log(this.weather);
      })
    })
  }

}
