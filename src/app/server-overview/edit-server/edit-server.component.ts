import { Component } from '@angular/core';
import { IconComponent } from '../../share/icon/icon.component';
import { ServerApiService } from '../service/server-api.service';
import { ServerInfoPanelService } from '../service/server-info-panel.service';
import { FormsModule, NgForm} from '@angular/forms';


@Component({
  selector: 'app-edit-server',
  standalone: true,
  imports: [ IconComponent, FormsModule],
  templateUrl: './edit-server.component.html',
  styleUrl: './edit-server.component.scss'
})
export class EditServerComponent {
  constructor(public api: ServerApiService, public infoPanle: ServerInfoPanelService){}
  address:string = '';

  onSubmit(form:NgForm){
    this.api.changeAdress(form.value.serverIp);
    this.api.switchModus();
    this.api.setUpNewIp();
  }
}
