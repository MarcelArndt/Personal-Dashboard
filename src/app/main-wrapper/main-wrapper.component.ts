import { Component } from '@angular/core';
import { QuotationComponent } from '../quotation/quotation.component';
import { BirthsdayComponent } from '../birthsday/birthsday.component';
import { ShoppingListComponent } from '../shopping-list/shopping-list.component';
import { BookmarkComponent } from '../bookmark/bookmark.component';
import { DaytimeComponent } from '../daytime/daytime.component';
import { ServerOverviewComponent } from '../server-overview/server-overview.component';


@Component({
  selector: 'app-main-wrapper',
  standalone: true,
  imports: [QuotationComponent, BirthsdayComponent, ShoppingListComponent, BookmarkComponent, DaytimeComponent, ServerOverviewComponent],
  templateUrl: './main-wrapper.component.html',
  styleUrl: './main-wrapper.component.scss'
})
export class MainWrapperComponent {

}
