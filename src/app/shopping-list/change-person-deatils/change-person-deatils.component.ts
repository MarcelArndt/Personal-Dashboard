import { Component } from '@angular/core';
import { IconComponent } from '../../share/icon/icon.component';
import { ShoppinglistService } from '../service/shoppinglist.service';
import { FormsModule, NgModel, NgForm } from '@angular/forms';
import { InfoPanelService } from '../service/info-panel.service';
import { NavRoutersService } from '../service/nav-routers.service';
import { ContactService } from '../service/contact.service';

@Component({
  selector: 'app-change-person-deatils',
  standalone: true,
  imports: [IconComponent, FormsModule ],
  templateUrl: './change-person-deatils.component.html',
  styleUrl: './change-person-deatils.component.scss'
})
export class ChangePersonDeatilsComponent {
  constructor(public shoppingList:ShoppinglistService, public infoPanel:InfoPanelService, public router: NavRoutersService, public contact: ContactService){}

  email:string = ''
  phoneNumber:string = ''
  phoneNumberForUserView:string = '+49 0176 12345678'
  emailForUserView = 'max@muster.com'

  ngOnInit(){
    this.emailForUserView = this.contact.email? this.contact.email : 'max@muster.com';
    this.phoneNumberForUserView = this.contact.phoneNumber? this.phoneNumberForUserView = this.translateBackwards(this.contact.phoneNumber) : '+49 0176 12345678';
  }

  closeWindows(){
    this.router.switchModus('overview')
  }

  onSubmit(form:NgForm){
    if(form.valid && form.touched){
      this.contact.phoneNumber = this.getPhoneNumberinFormat(form.value.phoneNumber, true);
      this.contact.email = form.value.email;
      this.throwSuccess();
    }
  }

  throwSuccess(){
    this.infoPanel.headline = `Data Successfuly changed`;
    this.infoPanel.message = `Your did successfuly change your Contact-Data`;
    this.infoPanel.type = 'info';
    this.infoPanel.servingButtonTo = '';
    this.infoPanel.buttonIcon='';
    this.infoPanel.buttonMessage=''
    this.router.switchModus('infoPanel');
  }

  // will chage the current format of a PhoneNumber for fitting Server (translateFowards) or UserView (translateBackwards).
  getPhoneNumberinFormat(number:string, isTranslateForwards:boolean = true):string{
    let phoneNumber = isTranslateForwards? this.translateFowards(number) : this.translateBackwards(number);
    return phoneNumber;
  }

  translateFowards(phoneNumber:string):string{
    let withoutSpace:string[] = phoneNumber.split(' ');
    let stringForServer = '';
    if (withoutSpace[0].slice(0-3) !== '+49') {
      withoutSpace.unshift('49');
    }
    for(let eachIndex in withoutSpace){
      stringForServer += withoutSpace[eachIndex];
    }
    return stringForServer;
  }

  translateBackwards(phoneNumber:string):string{
    return `+${phoneNumber.slice(0,2)} ${phoneNumber.slice(2,6)} ${phoneNumber.slice(6,phoneNumber.length)}`;
  }

}
