import { Injectable } from '@angular/core';
import { ShoppingList} from '../interface/types';
import { InfoPanelService } from './info-panel.service';


@Injectable({
  providedIn: 'root'
})
export class ShoppinglistService {

  constructor(public infoService: InfoPanelService) {}
  modus:string = 'overview';
  shoppingList: ShoppingList = {};
  listAsMessage:string = '';
  phoneNumber:string = ''
  email:string = ''
  emptyList = true;

  get shoppingListKeys(): string[] {
    return Object.keys(this.shoppingList);
  }

  checkForListLenght():boolean{
    let keys = this.shoppingListKeys;
    if(keys.length > 0){ 
      this.emptyList = true;
      return true;
    };
    this.emptyList = false;
    return false;
  }

  deleteList(){
    this.shoppingList = {};
    this.checkForListLenght();
  }

  deleteItem(index:string = ''){
    delete this.shoppingList[index];
    this.checkForListLenght();
  }

  saveEditItem(index:string = '', title:string, amount:number){
    this.shoppingList[index] = {title, amount, isEdit:false};
    this.checkForListLenght();
  }

  generateNewObjOfItem(itemName:string = "$#genRandomItem", amountOfItems:number = 0){
    let id = this.genIndex();
    let titleExapmle = ['Bananen','Erdbeeren','Toieltenpapier','Gemischtes Hack','Paprika'];
    let title = itemName === "$#genRandomItem"? titleExapmle[Math.floor(Math.random() * 4)] : itemName;
    let amount = itemName === "$#genRandomItem"? Math.floor(Math.random() * 10) : amountOfItems;
    amount = amount == 0? amount = 1 : amount;
    this.shoppingList[id] = {title, amount, isEdit:false};
    this.checkForListLenght();
  }

 init(amountOfItems:number = 0){
      for(let i = 0; i < amountOfItems; i++){
        this.generateNewObjOfItem();
      }
  }

  switchModus(newModus:string = 'overview', checkforItems:boolean=false){
    if(checkforItems && !this.checkForListLenght()){ 
      this.modus = 'noItemInList';
      return;
    };
    this.modus = newModus;
  }

  genIndex():string{
    let randomNumber:number;
    let randomIndex:string = ''
    for(let i = 0; i < 12 ; i++){
      randomNumber = Math.floor(Math.random() * 9);
      randomIndex += randomNumber.toString();
    }
    let id:string = Date.now().toString() + randomIndex;
    return id;
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
    for (let i = 0; i < Object.keys(this.shoppingList).length; i++){
      currentKey = Object.keys(this.shoppingList)[i] as string;
      message += `${this.shoppingList[currentKey].title}: ${this.shoppingList[currentKey].amount} Stck.\n\n`;
    }
    fullText = `Deine Aktuelle Einkaufsliste vom ${dateAsString}\n\n${message}Viel Spaß beim Shoppen :)`;
    return encodeURIComponent(fullText)
  }

  sendWhatsApp(){
    if(Object.keys(this.shoppingList).length <= 0) return;
    const message = this.translateListAsMessage();
    const linkToWhatsApp = `https://wa.me/${this.phoneNumber}?text=${message}`;
    window.open(linkToWhatsApp, '_blank');
  }

  changeContacts(phoneNumber:string, email:string){
    this.phoneNumber = phoneNumber;
    this.email =  email;
  }

}
