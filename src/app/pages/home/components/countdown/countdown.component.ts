import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Subscription, timer } from 'rxjs';
import { CountdownService } from '../../services/countdown/countdown.service';
import { LocalStorageService } from '../../services/localStorage/local-storage.service';


export interface UserData {
  username: string;
  color: string;
  time: number;
  id: number;
}

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.css']
})
export class CountdownComponent implements OnInit {
  color: any = '';
  timeLeft: number = 60;
  showSeconds =  '';
  showColors =  '';
  disabled: boolean = false;
  timerSub: Subscription  = new Subscription();

  constructor(private countdownService: CountdownService, private localStorage: LocalStorageService) { }
  ngOnInit() {
    this.countdownService.startTimer();
    this.timerSub = this.countdownService.getTimer().subscribe((timeLeft: number) => {
      this.timeLeft = timeLeft;
      console.log("timeLeft del subscribe: " + timeLeft);
    });
  }

  buttonClick(){
    this.countdownService.getColorBySeconds();
    this.countdownService.getRandomTimeClick();
    this.showColors = this.countdownService.getColorBySeconds();
    this.showSeconds = this.countdownService.getSeconds();
    console.log(this.countdownService.getSeconds());
    /* this.countdownService.saveUserData(personalData); */
    console.log(this.countdownService.getColorBySeconds());
    console.log(this.countdownService.getRandomTimeClick());
    this.countdownService.resetTimer();
    this.saveLs();
    this.getls();
    this.disabled = true;
  }

  getClickNumber(){
// TO DO GET NUMBER OF CLICK
  }


// disable the button
  getDisabled(): any {
    this.disabled = false;
  }
  //show color and seconds on html
  showBySeconds(){
    this.countdownService.getSeconds()
  }
  showByColors(){
    this.countdownService.getColorBySeconds();
  }
  saveLs(){
    this.localStorage.save_LocalStorage();
  }
  getls(){
    this.localStorage.get_localStorage();
  }

  ngOnDestroy() {
    if(this.timerSub)
      this.timerSub.unsubscribe();
  }
}
