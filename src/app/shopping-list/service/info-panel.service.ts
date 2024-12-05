import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InfoPanelService {

  constructor() { }
  type:string = 'info' || 'error';
  message:string = '';
  headline:string = '';
  icon:string = this.type === 'info'? 'info' : 'warning';
  servingButtonTo = '';
  buttonMessage = '';
  buttonIcon = '';

  resetData(){
    this.message= 'info';
    this.headline = '';
    this.icon= this.type === 'info'? 'info' : 'warning';
    this.servingButtonTo = '';
    this.buttonMessage = '';
    this.buttonIcon = '';
  }

}
