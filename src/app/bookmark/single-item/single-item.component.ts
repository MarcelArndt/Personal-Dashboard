import { Component,Input } from '@angular/core';
import { BookmarkItemService } from '../service/bookmark-item.service';

@Component({
  selector: 'app-single-item',
  standalone: true,
  imports: [],
  templateUrl: './single-item.component.html',
  styleUrl: './single-item.component.scss'
})
export class SingleItemComponent {
  @Input() index:string = '';
  constructor(public itemList : BookmarkItemService){}

  fillValues(){
  
  }

}
