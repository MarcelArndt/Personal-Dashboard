import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../../share/icon/icon.component';
import { ShoppinglistService } from '../service/shoppinglist.service';
import { FormsModule, NgForm } from '@angular/forms'
import { NavRoutersService } from '../service/nav-routers.service';

@Component({
  selector: 'app-add-new-item',
  standalone: true,
  imports: [IconComponent, FormsModule, CommonModule ],
  templateUrl: './add-new-item.component.html',
  styleUrl: './add-new-item.component.scss'
})
export class AddNewItemComponent {
  constructor(public shoppingList: ShoppinglistService, public router:  NavRoutersService){}
  name:string = '';
  amount:number = 0;


  closeWindows(){
    this.router.switchModus('overview')
  }

  onSubmit(form:NgForm){
    if(form.valid && form.touched){
      this.shoppingList.generateNewObjOfItem(form.value.name, form.value.amount);
      this.closeWindows();
    }
  }

}
