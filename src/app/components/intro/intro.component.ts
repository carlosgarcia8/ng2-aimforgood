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

  constructor(public _gs:GameService) { }

  ngOnInit() {
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
