import { Component } from '@angular/core';
import { IconComponent } from '../../share/icon/icon.component';
import { ShoppinglistService } from '../service/shoppinglist.service';
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-add-new-item',
  standalone: true,
  imports: [IconComponent,  FormsModule ],
  templateUrl: './add-new-item.component.html',
  styleUrl: './add-new-item.component.scss'
})
export class AddNewItemComponent {
  constructor(public shoppingList: ShoppinglistService){}
  name:string = '';
  amount:number = 0;
}
