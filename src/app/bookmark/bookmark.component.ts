import { Component } from '@angular/core';
import { IconComponent } from '../share/icon/icon.component';
import { BookmarkMenuComponent } from './bookmark-menu/bookmark-menu.component';
import { SingleItemComponent } from './single-item/single-item.component';
import { BookmarkItemService } from './service/bookmark-item.service';
import { NavigationBookmarkService } from './service/navigation-bookmark.service';
import { AddItemComponent } from './add-item/add-item.component';

@Component({
  selector: 'app-bookmark',
  standalone: true,
  imports: [IconComponent, BookmarkMenuComponent, SingleItemComponent, AddItemComponent,  ],
  templateUrl: './bookmark.component.html',
  styleUrl: './bookmark.component.scss'
})
export class BookmarkComponent {
  constructor(public itemList: BookmarkItemService, public router: NavigationBookmarkService){}

  ngOnInit(){
    this.router.goToPath('start')
    this.itemList.init();
  }
}
