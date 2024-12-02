import { Injectable } from '@angular/core';
import { ShoppingList, ShoppingItem } from '../interface/types';


@Injectable({
  providedIn: 'root'
})
export class ShoppinglistService {

  constructor() { }

  shoppingList: ShoppingList = {};

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

  generateTestObj(){
    let id = this.genIndex();
    let titleExapmle = ['Bananen','Erdbeeren','Toieltenpapier','Gemischtes Hack','Paprika'];
    let title = titleExapmle[Math.floor(Math.random() * 4)];
    let amount = Math.floor(Math.random() * 10);
    amount = amount > 1 ? amount : amount += 1;
    this.shoppingList[id] = {title, amount};
  }

 init(){
    for(let i = 0; i < 3; i++){
      this.generateTestObj();
    }
  }

  get shoppingListKeys(): string[] {
    return Object.keys(this.shoppingList);
  }

}
