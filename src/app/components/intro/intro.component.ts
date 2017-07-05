import { Component, OnInit } from '@angular/core';
import { SIZE_OPTIONS, SPEED_OPTIONS } from '../../app.constants';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {
  public speed_modes = SPEED_OPTIONS;
  public size_options = SIZE_OPTIONS;

  public speed_default = "Normal";
  public size_default = "Medium";

  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels:string[] = [];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;

  public barChartData:any[];

  private _hayStats:boolean = false;

  constructor(private _gs:GameService) { }

  ngOnInit() {
    this.barChartLabels = this._gs.barChartLabels;
    this.barChartData = this._gs.barChartData;

    if (this.barChartData) {
      this._hayStats = true;
    }
  }

  ngOnChanges() {
    this.barChartLabels = this._gs.barChartLabels;
    this.barChartData = this._gs.barChartData;

    if (this.barChartData) {
      this._hayStats = true;
    }
  }

  cambiarSpeed(speed:string) {
    this.speed_default = speed;
  }

  cambiarSize(size:string) {
    this.size_default = size;
  }

  newGame() {
    this._gs.actualizarConfig(this.speed_default, this.size_default);
    this._gs.started = true;
    this._gs.start();
  }

}
