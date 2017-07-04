import { Component, OnInit } from '@angular/core';
import { GameService } from '../../services/game.service';
import { INITIAL_TIME } from '../../app.constants';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  constructor(private _gs:GameService) { }

  ngOnInit() {
  }
}
