import { Component, Input } from '@angular/core';
import { IconComponent } from '../../share/icon/icon.component';
import { ShoppinglistService } from '../service/shoppinglist.service';
import { NavRoutersService } from '../service/nav-routers.service';

@Component({
  selector: 'app-no-items',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './no-items.component.html',
  styleUrl: './no-items.component.scss'
})
export class NoItemsComponent {
  constructor(public shoppingList:ShoppinglistService, public router: NavRoutersService  ){}

  @Input() isDisableBackButton:boolean = false;

  closeWindows(){
    this.router.switchModus('overview')
  }

}
