import { Component } from '@angular/core';
import { ServerApiService } from './service/server-api.service';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../share/icon/icon.component';
import { ServerOverviewPanelComponent } from './server-overview-panel/server-overview-panel.component';
import { InfoPanelComponent } from './info-panel/info-panel.component';
import { ServerInfoPanelService } from './service/server-info-panel.service';
import { EditServerComponent } from './edit-server/edit-server.component';

@Component({
  selector: 'app-server-overview',
  standalone: true,
  imports: [CommonModule, IconComponent, ServerOverviewPanelComponent, InfoPanelComponent, EditServerComponent  ],
  templateUrl: './server-overview.component.html',
  styleUrls:[ './server-overview.component.scss', './loading-animation.scss']
})
export class ServerOverviewComponent {
  constructor( public api:ServerApiService, public infoPanel: ServerInfoPanelService ){}

  async ngOnInit(){
    if(this.api.address){
      this.api.init();
    } else {
      this.infoPanel.checkForData();
    }

  }


}
