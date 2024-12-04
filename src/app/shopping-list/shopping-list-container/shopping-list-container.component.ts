import { Component, Input } from '@angular/core';
import { IconComponent } from '../../share/icon/icon.component';
import { ShoppinglistService } from '../service/shoppinglist.service';
import { ShoppingList, ShoppingItem } from '../interface/types';


@Component({
  selector: 'app-shopping-list-container',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './shopping-list-container.component.html',
  styleUrl: './shopping-list-container.component.scss'
})

export class ShoppingListContainerComponent {
  constructor (public shoppingList : ShoppinglistService ){}
  @Input() id?:string | "";
  @Input() title:string = "";
  @Input() amount:number = 0;

  addAmount(){
    if(this.id){
      this.shoppingList.shoppingList[this.id].amount += 1
    }
  }

  minusAmount(){
    if(this.id){
      this.shoppingList.shoppingList[this.id].amount = this.shoppingList.shoppingList[this.id].amount > 1 ? this.shoppingList.shoppingList[this.id].amount -= 1 : this.deleteObject();
    }
  }

  deleteObject(){
    if(this.id && this.shoppingList.shoppingList[this.id]){
      delete this.shoppingList.shoppingList[this.id];
    }
    return 0;
  }

  editObject(){
    if(this.id && this.shoppingList.shoppingList[this.id]) this.shoppingList.shoppingList[this.id].isEdit = true;
  }

}



