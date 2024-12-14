import { Injectable } from '@angular/core';
import { ItemList } from '../interface/interface';
import { Item } from '../interface/interface';

@Injectable({
  providedIn: 'root'
})
export class BookmarkItemService {

  constructor() { }

  itemList?:ItemList;
  testImgUrl:string = '';
  
  genNewItem(obj:Item){
    this.itemList![this.genIndex()] = {name: obj.name || '', link: obj.link || '', img: this.getFavIconFromUrl(obj.link)};
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

  init(){

  }

  getFavIconFromUrl(url:string){
    const domain = new URL(url).hostname;
    return `https://logo.clearbit.com/${domain}`;
  }

}
