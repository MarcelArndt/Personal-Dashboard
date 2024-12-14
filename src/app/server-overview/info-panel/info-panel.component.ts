import { Component } from '@angular/core';
import { IconComponent } from '../../share/icon/icon.component';
import { CommonModule } from '@angular/common';
import { ServerInfoPanelService } from '../service/server-info-panel.service';
import { ServerApiService } from '../service/server-api.service';

@Component({
  selector: 'app-info-panel',
  standalone: true,
  imports: [ IconComponent, CommonModule],
  templateUrl: './info-panel.component.html',
  styleUrl: './info-panel.component.scss'
})
export class InfoPanelComponent {
  constructor( public api: ServerApiService, public infoPanel: ServerInfoPanelService){}

  onSubmit(){
    if(typeof this.infoPanel.panelButton!.function === 'function'){
      this.infoPanel.panelButton!.function();
    }
  }
}
