import { Component, OnInit } from '@angular/core';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {

  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true,
    options: {
      scales: {
          yAxes: [{
              ticks: {
                  beginAtZero: true
              }
          }]
      }
  }
  };
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;

  public _hayStats:boolean = false;

  constructor(private _gs:GameService) { }

  ngOnInit() {
    if (this._gs.barChartData) {
      this._hayStats = true;
    }
  }

}
