import { Injectable } from '@angular/core';
import { ShoppingList} from '../interface/types';
import { InfoPanelService } from './info-panel.service';
import { NavRoutersService } from './nav-routers.service';


@Injectable({
  providedIn: 'root'
})
export class ShoppinglistService {

  constructor(public infoService: InfoPanelService, public navigation: NavRoutersService ) {}
  modus:string = 'overview';
  shoppingList: ShoppingList = {};
  listAsMessage:string = '';
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

}
