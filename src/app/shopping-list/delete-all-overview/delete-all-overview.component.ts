import { Component } from '@angular/core';
import { IconComponent } from '../../share/icon/icon.component';
import { ShoppinglistService } from '../service/shoppinglist.service';

@Component({
  selector: 'app-delete-all-overview',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './delete-all-overview.component.html',
  styleUrl: './delete-all-overview.component.scss'
})
export class DeleteAllOverviewComponent {
  constructor(public shoppingList: ShoppinglistService){}

  accept(){
    this.shoppingList.deleteList();
    this.shoppingList.switchModus('overview')
  }

  closeWindows(){
    this.shoppingList.switchModus('overview')
  }
}
