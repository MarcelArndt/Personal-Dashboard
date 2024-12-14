import { Injectable } from '@angular/core';
import { ServerApiService } from './server-api.service';
import { panelButton } from '../interface/types';

@Injectable({
  providedIn: 'root'
})
export class ServerInfoPanelService {
  constructor(public api:ServerApiService) { }
  panelMessage:string = '';
  panelIcon:string = '';
  panelButton?:panelButton;

  checkForData(){
    if(!this.api.address){
      this.panelMessage = 'No MC-Server registered!'
      this.panelIcon = 'warning';
      this.panelButton = {
        text:'Add Server',
        icon: 'add',
        class: 'green',
        enable: true,
        function: () => {
          this.api.switchModus();
        },
      }
    }
  }
}
