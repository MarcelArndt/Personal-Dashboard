import { Component } from '@angular/core';
import { IconComponent } from '../share/icon/icon.component';
import { ShoppingListContainerComponent } from './shopping-list-container/shopping-list-container.component';
import { ShoppinglistService } from './service/shoppinglist.service';
import { ShoppinglistMenuComponent } from './shoppinglist-menu/shoppinglist-menu.component';
import { DeleteAllOverviewComponent } from './delete-all-overview/delete-all-overview.component';
import { AddNewItemComponent } from './add-new-item/add-new-item.component';
import { ShoppingListContainerEditComponent } from './shopping-list-container-edit/shopping-list-container-edit.component';
import { NoItemsComponent } from './no-items/no-items.component';
import { ChangePersonDeatilsComponent } from './change-person-deatils/change-person-deatils.component';
import { InfoPanelComponent } from './info-panel/info-panel.component';



@Component({
  selector: 'app-shopping-list',
  standalone: true,
  imports: [IconComponent, ShoppingListContainerComponent, InfoPanelComponent, ShoppinglistMenuComponent, DeleteAllOverviewComponent, AddNewItemComponent, ShoppingListContainerEditComponent, NoItemsComponent, ChangePersonDeatilsComponent],
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss', './shopping-list.component.scss']
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
