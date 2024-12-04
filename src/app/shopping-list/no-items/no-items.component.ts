import { Component } from '@angular/core';
import { IconComponent } from '../../share/icon/icon.component';
import { ShoppinglistService } from '../service/shoppinglist.service';

@Component({
  selector: 'app-no-items',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './no-items.component.html',
  styleUrl: './no-items.component.scss'
})
export class NoItemsComponent {
  constructor(public shoppingList:ShoppinglistService ){}
  closeWindows(){
    this.shoppingList.switchModus('overview')
  }

}
