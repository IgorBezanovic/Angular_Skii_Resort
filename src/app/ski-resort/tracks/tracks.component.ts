import { HttpParams } from '@angular/common/http';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TrackList } from 'src/app/model/track-list.model';
import { SkiResortService } from 'src/app/services/ski-resort.service';

@Component({
  selector: 'app-tracks',
  templateUrl: './tracks.component.html',
  styleUrls: ['./tracks.component.css']
})
export class TracksComponent implements OnInit {
  tracks: TrackList[];
  sort: string = '';

  params = [
    {title: 'Rating', value: 'rating'},
    {title: 'Length', value: 'length_km'}
  ]

  

  constructor(private service: SkiResortService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    
    this.route.params.subscribe(newParams => {
      let id = newParams['resortId'];
      this.service.getTracks(id, this.sort).subscribe(resp => {
        this.tracks = resp;
      })
    })
  }

  changeValue(sort: string) {
    console.log(sort);
    this.route.params.subscribe(newParams => {
      let id = newParams['resortId'];
      this.service.getTracks(id, sort).subscribe(resp => {
        this.tracks = resp;
      })
    })
  }


}
