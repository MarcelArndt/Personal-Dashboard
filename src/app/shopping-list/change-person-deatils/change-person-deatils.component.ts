import { Component } from '@angular/core';
import { IconComponent } from '../../share/icon/icon.component';
import { ShoppinglistService } from '../service/shoppinglist.service';
import { FormsModule, NgModel, NgForm } from '@angular/forms';

@Component({
  selector: 'app-change-person-deatils',
  standalone: true,
  imports: [IconComponent, FormsModule ],
  templateUrl: './change-person-deatils.component.html',
  styleUrl: './change-person-deatils.component.scss'
})
export class ChangePersonDeatilsComponent {
  constructor(public shoppingList:ShoppinglistService ){}

  email:string = ''
  phoneNumber:string = ''

  closeWindows(){
    this.shoppingList.switchModus('overview')
  }

  translateFowards(number:string){

  }

  translateBackwards(number:string){

  }

  getPhoneNumberinFormat(number:string, isTranslateForwards:boolean = true){
    	let phoneNumber = isTranslateForwards? this.translateFowards(number) : this.translateBackwards(number);
      return phoneNumber;
  }

  onSubmit(form:NgForm){
    if(form.valid && form.touched){
      this.getPhoneNumberinFormat(form.value.phoneNumber, true)
      this.closeWindows();
    }
  }

}
