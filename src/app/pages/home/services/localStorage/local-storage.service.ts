import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UserData } from '../../components/countdown/countdown.component';

const data = 'my-data';

@Injectable({
  providedIn: 'root'
})


export class LocalStorageService {
  time:number = 0;
  color:string = '';
  constructor() {
    this.initialStorage();
  }


clearStorage():void{
  try {
    localStorage.clear();
  } catch (error) {
    console.log('Error clearing storage',error);
    }
  }


  private initialStorage():void {
    const currents = JSON.parse(localStorage.getItem(data) || '{}');
    if(!currents) {
      localStorage.setItem(data, JSON.stringify([]));
    }
    this.save_LocalStorage();
  }


//LOCALSTORAGE
get_localStorage(){
  let data = localStorage.getItem('data');
}

save_LocalStorage(){
  let data: any = {
    time : 0,
    color: '',
  }
  console.log(data);
  localStorage.setItem('data', JSON.stringify(data));
}

}
