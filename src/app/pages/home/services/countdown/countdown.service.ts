import {  Injectable } from '@angular/core';
import { interval, Subject, tap } from 'rxjs';

@Injectable()
export class CountdownService {

  timeLeft: number = 60;
  interval: any;
  timer: Subject<number>  = new Subject<number>();

  // timer sujeto

  // timer emitir un nuevo valor
  //

  // timer se puede subscribir otros componentes PARA OBTENER EL VALOR QUE ENVIAS
  // countdown.component

  constructor() { }

  getTimer(){
    return this.timer;
  }

  resetTimer(){
    this.timeLeft = 60;
    return this.timer.next(this.timeLeft);
  }

  getRandomTimeClick(){
    return Math.floor(Math.random() * (60 - 0 + 1) + 0);
  }

  startTimer() {
      interval(1000)
      .pipe(
        tap(() => {
          if(this.timeLeft > 0) {
            this.timeLeft--;
          } else {
            this.timeLeft = 60;
          }
          this.timer.next(this.timeLeft);
        })
      )
      .subscribe();
  }

  getSeconds(){
    const timeLeft = this.timeLeft
    if(timeLeft >=52){
      return timeLeft + ' seconds';
    }else if(timeLeft >= 42){
      return timeLeft + ' seconds';
    }else if(timeLeft >=32){
      return timeLeft + ' seconds';
    }else if(timeLeft >= 22){
      return timeLeft + ' seconds';
    }else if(timeLeft >= 12){
      return timeLeft + ' seconds';
    }else{
      return timeLeft + ' seconds';
    }
  }

  getColorBySeconds() {
    const color: string[] = ['Purple', 'Blue', 'Green', 'Yellow', 'Orange', 'Red', 'Grey', 'White'];
    if(this.timeLeft >= 52){
      return color[0];
    }else if(this.timeLeft >= 42){
      return color[1];
    }else if(this.timeLeft >=32){
      return color[2];
    }else if(this.timeLeft >= 22){
      return color[3];
    }else if(this.timeLeft >= 12){
      return color[4];
    }else{
      return color[5];
    }
  }
}


export interface UserData {
  username: string;
  color: string;
  time: number;
  id: number;
}
