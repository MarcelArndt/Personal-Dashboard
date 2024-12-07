import { Component } from '@angular/core';
import { IconComponent } from '../share/icon/icon.component';

@Component({
  selector: 'app-daytime',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './daytime.component.html',
  styleUrl: './daytime.component.scss'
})
export class DaytimeComponent {
  currentTime?:Date;
  dayTimeCounter?:number;
  dayName = ['Sonntag','Montag','Dienstag','Mittwoch','Donnerstag','Freitag','Samstag']
  dayTimeObj = [
    {title: 'Goodnight', icon: 'owl'},
    {title: 'Good Morning', icon: 'wb_twilight'},
    {title: 'Good Lunch', icon: 'light_mode'},
    {title: 'Good Evening', icon: 'dark_mode'},
  ]
  
  currentDate:string = '';
  chosenData= ['','','']
  chosenTitel:string = '';
  chosenIcon:string = '';

  ngOnInit(){
    this.currentTime = new Date;
    this.checkDayTime();
    this.choseCorrectItem();
    this.getTime();

  }

  checkDayTime(){
      switch(Math.floor(this.currentTime!.getHours() / 6)){
        case 0: this.dayTimeCounter = 0 ;break;   
        case 1: this.dayTimeCounter = 1 ;break;   
        case 2: this.dayTimeCounter = 2 ;break; 
        case 3: this.dayTimeCounter = 3 ;break;   
        case 4: this.dayTimeCounter = 4 ;break;     
    }
    this.dayTimeCounter =  this.dayTimeCounter === 4? this.dayTimeCounter = 0 : this.dayTimeCounter;
  }

  choseCorrectItem(){
      console.log(this.dayTimeObj[this.dayTimeCounter!].title);
      this.chosenData[0] = this.dayTimeObj[this.dayTimeCounter!].title;
      this.chosenData[1] = this.dayTimeObj[this.dayTimeCounter!].icon;
      this.chosenData[2] = this.dayName[this.currentTime!.getDay()];
  }

  getTime(){
    const day = this.getNumberInFormat(this.currentTime!.getDay());
    const month =  this.getNumberInFormat(this.currentTime!.getMonth());
    const year = this.getNumberInFormat(this.currentTime!.getFullYear());
    this.currentDate = `${day}.${month}.${year}`;
  }

  getNumberInFormat(number:number):string{
    let string = number <= 9? '0' + number : number.toString();
    return string.toString();
  }

}
