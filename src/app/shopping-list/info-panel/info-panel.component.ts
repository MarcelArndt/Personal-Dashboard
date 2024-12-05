import { Component } from '@angular/core';
import { IconComponent } from '../../share/icon/icon.component';
import { ShoppinglistService } from '../service/shoppinglist.service';
import { InfoPanelService } from '../service/info-panel.service';
import { NavRoutersService } from '../service/nav-routers.service';

@Component({
  selector: 'app-info-panel',
  standalone: true,
  imports: [ IconComponent],
  templateUrl: './info-panel.component.html',
  styleUrl: './info-panel.component.scss'
})
export class InfoPanelComponent {
  constructor(public shoppingList:ShoppinglistService, public infoService: InfoPanelService, public router: NavRoutersService ){}

  closeWindows(){
    this.router.switchModus('overview');
    this.infoService.resetData();
  }

}
