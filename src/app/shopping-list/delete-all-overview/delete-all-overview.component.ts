import { Component } from '@angular/core';
import { IconComponent } from '../../share/icon/icon.component';
import { ShoppinglistService } from '../service/shoppinglist.service';
import { NavRoutersService } from '../service/nav-routers.service';

@Component({
  selector: 'app-delete-all-overview',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './delete-all-overview.component.html',
  styleUrl: './delete-all-overview.component.scss'
})
export class DeleteAllOverviewComponent {
  constructor(public shoppingList: ShoppinglistService, public router: NavRoutersService ){}

  accept(){
    this.shoppingList.deleteList();
    this.router.switchModus('overview')
  }

  closeWindows(){
    this.router.switchModus('overview')
  }

}
