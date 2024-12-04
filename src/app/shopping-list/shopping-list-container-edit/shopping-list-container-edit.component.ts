import { Component, Input } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms'
import { CommonModule } from '@angular/common';
import { IconComponent } from '../../share/icon/icon.component';
import { ShoppinglistService } from '../service/shoppinglist.service';

@Component({
  selector: 'app-list-container-edit',
  standalone: true,
  imports: [CommonModule, FormsModule, IconComponent, ],
  templateUrl: './shopping-list-container-edit.component.html',
  styleUrl: './shopping-list-container-edit.component.scss'
})
export class ShoppingListContainerEditComponent {
  constructor(public shoppingList: ShoppinglistService ){}
  @Input() id:string = '';
  @Input() name:string = '';
  @Input() amount:number = 0;

  onSubmit(form:NgForm){
    this.shoppingList.saveEditItem(this.id,this.name,this.amount)
  }

  deleteItem(){
    this.shoppingList.deleteItem(this.id);
  }

}
