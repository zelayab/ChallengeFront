import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

constructor() { }

saveUserData(personalData: any){
  localStorage.setItem('personalData', JSON.stringify(personalData));
}

getUserData(){
  return JSON.parse(localStorage.getItem('personalData') || '{}');
}

}
