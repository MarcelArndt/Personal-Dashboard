import { Component } from '@angular/core';
import { IconComponent } from '../share/icon/icon.component';
import { BookmarkMenuComponent } from './bookmark-menu/bookmark-menu.component';
import { SingleItemComponent } from './single-item/single-item.component';
import { BookmarkItemService } from './service/bookmark-item.service';

@Component({
  selector: 'app-bookmark',
  standalone: true,
  imports: [IconComponent, BookmarkMenuComponent, SingleItemComponent,  ],
  templateUrl: './bookmark.component.html',
  styleUrl: './bookmark.component.scss'
})
export class BookmarkComponent {
  constructor(public itemList: BookmarkItemService){}

  ngOnInit(){
    this.itemList.init();
  }
}
