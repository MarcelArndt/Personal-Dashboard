import { Component } from '@angular/core';
import { ServerApiService } from '../service/server-api.service';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../../share/icon/icon.component';

@Component({
  selector: 'app-server-overview-panel',
  standalone: true,
  imports: [CommonModule, IconComponent],
  templateUrl: './server-overview-panel.component.html',
  styleUrls: ['./server-overview-panel.component.scss', '../loading-animation.scss']
})
export class ServerOverviewPanelComponent {
  constructor( public api:ServerApiService){}
}
