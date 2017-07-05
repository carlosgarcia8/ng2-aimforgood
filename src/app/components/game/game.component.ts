import { Component, OnInit } from '@angular/core';
import { GameService } from '../../services/game.service';
import { SIZE_OPTIONS } from '../../app.constants';
import {
  trigger,
  state,
  style,
  keyframes,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
  animations: [
    trigger('flyInOut', [
      state('in', style({transform: 'scale(0, 0)'})),
      transition('void => *', [
        animate(3000, keyframes([
          style({opacity: 0, transform: 'scale(0.2, 0.2)', offset: 0}),
          style({opacity: 1, transform: 'scale(1, 1)',  offset: 0.3}),
          style({opacity: 1, transform: 'scale(0, 0)',     offset: 1.0})
        ]))
      ])
    ])
  ]
})
export class GameComponent implements OnInit {

  size_options = SIZE_OPTIONS;

  constructor(private _gs:GameService) { }

  ngOnInit() {
  }

  animationDone(idx:number, event) {
    if (this._gs.started) {
      this._gs.circles[idx].done = true;
    }
  }
}
