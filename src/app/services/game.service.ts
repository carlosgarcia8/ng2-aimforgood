import { Injectable } from '@angular/core';

@Injectable()
export class GameService {

  public speed_selec:string = "";
  public size_selec:string = "";

  public started:boolean = false;

  constructor() { }

  actualizarConfig(speed:string, size:string) {
    this.speed_selec = speed;
    this.size_selec = size;
  }
}
