import { Component } from '@angular/core';
import { IconComponent } from '../share/icon/icon.component';
import { ShoppingListContainerComponent } from './shopping-list-container/shopping-list-container.component';
import { ShoppinglistService } from './service/shoppinglist.service';



@Component({
  selector: 'app-shopping-list',
  standalone: true,
  imports: [IconComponent, ShoppingListContainerComponent],
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.scss'
})
export class ShoppingListComponent {
  constructor( public shoppingList: ShoppinglistService){};

  ngOnInit(){
    this.shoppingList.init();
  }

  get fillerArray():number[]{
    const fillerCount = Math.max(0, 5 - this.shoppingList.shoppingListKeys.length);
    return Array(fillerCount).fill(0);
  }


}
