import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SkiPass } from 'src/app/model/skiPass.model';
import { SkiResortService } from 'src/app/services/ski-resort.service';


@Component({
  selector: 'app-ski-pass',
  templateUrl: './ski-pass.component.html',
  styleUrls: ['./ski-pass.component.css']
})
export class SkiPassComponent implements OnInit {
  skiPass: SkiPass[];
  from: any;
  to: any;
  days: number;
  

  constructor(private service: SkiResortService, private route: ActivatedRoute) { 
    
  }

  ngOnInit(): void {
    this.route.params.subscribe(newParams => {
      let id = newParams['resortId'];
      this.service.getSkiPass(id).subscribe(resp => {
        this.skiPass = resp;
      })
    })
  }

  calculateDays(): void {
    let fromSum = this.from.year + this.from.month + this.from.day;
    let toSum = this.to.year + this.to.month + this.to.day;
    this.days = toSum - fromSum;
    console.log(this.days);
  }

}
