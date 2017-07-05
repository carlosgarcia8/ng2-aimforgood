import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { SIZE_OPTIONS, SPEED_OPTIONS, INITIAL_TIME } from '../app.constants';
import { Circle } from '../interfaces/circle.interface';

@Injectable()
export class GameService {
  public circles:Circle[] = [];

  public speed_selec:string = "";
  public size_selec:string = "";

  public vel:number;

  public started:boolean = false;

  private hasPlayed:boolean = false;

  public intervalo:any;

  public timer:any;
  public suscripcion:any;

  public ticks:number = 0;
  public time:number = INITIAL_TIME;

  private aciertos:number = 0;
  private fallos:number = 0;

  private porcentaje:number = 0;

  private total_posibles:number = 0;

  constructor() { }

  actualizarConfig(speed:string, size:string) {
    this.speed_selec = speed;
    this.size_selec = size;
  }

  start() {
    this.hasPlayed = true;
    this.aciertos = 0;
    this.fallos = 0;

    switch (this.speed_selec)
    {
      case SPEED_OPTIONS[0]:
        this.vel = 2000;
        break;
      case SPEED_OPTIONS[1]:
        this.vel = 1000;
        break;
      case SPEED_OPTIONS[2]:
        this.vel = 800;
        break;
      case SPEED_OPTIONS[3]:
        this.vel = 500;
        break;
     default : this.vel = 1000;
    }

    this.timer = Observable.timer(1000,1000);

    this.suscripcion = this.timer.subscribe(t=> {
        this.crono(t);
    });

    let circle:Circle = {
      left: Math.round(Math.random() * 95) + 1,
      top: Math.round(Math.random() * 79) + 2,
      clicked: false,
      done: false
    }

    this.circles.push(circle);

    this.intervalo = setInterval (() => {
      let circle:Circle = {
        left: Math.round(Math.random() * 95) + 1,
        top: Math.round(Math.random() * 79) + 2,
        clicked: false,
        done: false
      }

      this.circles.push(circle);
    }, this.vel);
  }

  stop() {
    clearInterval(this.intervalo);
    let total = this.aciertos + this.fallos;
    if (total !== 0) {
      this.porcentaje = (this.aciertos / (total)) * 100;
    }

    this.total_posibles = this.circles.filter(circle => circle.done === true).length;

    this.circles = [];
  }

  crono(t:number) {
    if (!this.started) {
      return;
    }
    this.ticks = t + 1;
    let resul = this.time - this.ticks;

    if (resul == 0 || resul < 0) {
      this.started = false;
      this.stop();

      this.time = INITIAL_TIME;
      this.ticks = 0;
      this.suscripcion.unsubscribe();
    }
  }

  eliminarCircle(idx:number, event) {
    event.stopPropagation();
    this.aciertos++;
    this.time++;
    this.circles[idx].clicked = true;
  }

  fallo() {
    this.fallos++;
    if (this.time - 2 < 0) {
      this.time = 0;
    } else {
      this.time -= 2;
    }
  }
}
