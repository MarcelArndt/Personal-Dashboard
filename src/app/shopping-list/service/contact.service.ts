import { Injectable } from '@angular/core';

import { ShoppinglistService } from './shoppinglist.service';
@Injectable({
  providedIn: 'root'
})
export class ContactService {
  phoneNumber:string = '';
  email:string = '';

  constructor(public shoppingList: ShoppinglistService) { }

  changeContacts(phoneNumber:string, email:string){
    this.phoneNumber = phoneNumber;
    this.email =  email;
  }

  getInFormat(number:number, addOffset:number = 0):string{
    let newFormat;
    if(addOffset > 0){
      newFormat = number + addOffset < 10? '0' + number + addOffset : number + addOffset;
    } else {
      newFormat = number < 10? '0' + number : number;
    }
    return newFormat.toString();
  }

  translateListAsMessage():string{
    const currentDate = new Date();
    const dateAsString = `${ this.getInFormat(currentDate.getDate())}.${this.getInFormat(currentDate.getMonth(),1)}.${currentDate.getFullYear()} um ${this.getInFormat(currentDate.getHours())}:${this.getInFormat(currentDate.getMinutes())} Uhr`
    let message = "";
    let currentKey = '';
    let fullText = '';
    for (let i = 0; i < Object.keys(this.shoppingList.shoppingList).length; i++){
      currentKey = Object.keys(this.shoppingList.shoppingList)[i] as string;
      message += `${this.shoppingList.shoppingList[currentKey].title}: ${this.shoppingList.shoppingList[currentKey].amount} Stck.\n\n`;
    }
    fullText = `Deine Aktuelle Einkaufsliste vom ${dateAsString}\n\n${message}Viel Spaß beim Shoppen :)`;
    return encodeURIComponent(fullText);
  }

  sendWhatsApp(){
    if(Object.keys(this.shoppingList).length <= 0) return;
    const message = this.translateListAsMessage();
    const linkToWhatsApp = `https://wa.me/${this.phoneNumber}?text=${message}`;
    window.open(linkToWhatsApp, '_blank');
  }

  sendEmail(){
    console.log('send E-Mail');
  }

}
