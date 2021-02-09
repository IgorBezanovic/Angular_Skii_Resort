import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SkiResortDescription } from 'src/app/model/skiResortDescription.model';
import { SkiResortService } from 'src/app/services/ski-resort.service';

@Component({
  selector: 'app-resort-description',
  templateUrl: './resort-description.component.html',
  styleUrls: ['./resort-description.component.css']
})
export class ResortDescriptionComponent implements OnInit {
  description: SkiResortDescription;

  constructor(private route: ActivatedRoute, private service: SkiResortService) { }

  ngOnInit(): void {
    this.route.params.subscribe(newParams => {
      let id = newParams['resortId'];
      this.service.getDescription(id).subscribe(resp => {
        this.description = resp;
        console.log(this.description);
      })
    })
  }

}
