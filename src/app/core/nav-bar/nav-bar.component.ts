import { Component, OnInit } from '@angular/core';
import { SkiResortName } from 'src/app/model/skiResortName.model';
import { SkiResortNameSearch } from 'src/app/model/skiResortNameSearch.model';
import { SkiResortService } from 'src/app/services/ski-resort.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  resorts: SkiResortName[];

  constructor(private service: SkiResortService) { }

  ngOnInit(): void {
    this.service.getSkiResortsName().subscribe(resp => {
      this.resorts = resp.skiResorts;
      console.log(this.resorts);
    })
    
  }

}
