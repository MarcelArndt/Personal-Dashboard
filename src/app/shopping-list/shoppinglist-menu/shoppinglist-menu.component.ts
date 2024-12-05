import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../../share/icon/icon.component';
import { ShoppinglistService } from '../service/shoppinglist.service';
import { InfoPanelService } from '../service/info-panel.service';
import { NavRoutersService } from '../service/nav-routers.service';
import { ActionsObj } from '../interface/types';
import { ContactService } from '../service/contact.service';


@Component({
  selector: 'app-shoppinglist-menu',
  standalone: true,
  imports: [IconComponent, CommonModule],
  templateUrl: './shoppinglist-menu.component.html',
  styleUrl: './shoppinglist-menu.component.scss'
})
export class ShoppinglistMenuComponent {
constructor(public shoppingList : ShoppinglistService, public infoPanel:InfoPanelService , public router: NavRoutersService, public contact: ContactService){}
targetMenuIconId:string = '#shopping-list-menu'
isShowMenu:boolean = false;

actionsObj: ActionsObj  = {
  whatsApp: () => this.navToWhatsApp(),
  email: () => this.navtoEmail(),
  delteItems: () => this.deleteAllItems(),
}

private clickListener!: (event: MouseEvent) => void
toggleMenu(){
  this.isShowMenu = !this.isShowMenu;
  if(this.isShowMenu){
    window.addEventListener('click', this.clickListener);
  } else {
    window.removeEventListener('click', this.clickListener);
  }
}

ngOnInit(){
  this.clickListener = (event: MouseEvent) => this.checkForClick(event);
}

checkForClick(e:MouseEvent){
  window.addEventListener('click', (e) => {
    const target = e.target as HTMLElement;
    if(this.isShowMenu && !target.closest(this.targetMenuIconId) && !target.closest('.menu-nav')){
      this.toggleMenu(); 
    }
  });
}

throwError(name:string){
  this.infoPanel.headline = `No ${name} found`;
  this.infoPanel.message = `No ${name} was found. Please enter your ${name} in Change Data.`;
  this.infoPanel.type = 'error';
  this.infoPanel.servingButtonTo = 'changeData';
  this.infoPanel.buttonIcon='person';
  this.infoPanel.buttonMessage='Set Data'
  this.router.switchModus('infoPanel');
}

throwSuccess(name:string){
  this.infoPanel.headline = `${name} was successful`;
  this.infoPanel.message = `Your ${name}-Message is successfuly created. Check your Messages`;
  this.infoPanel.type = 'info';
  this.infoPanel.servingButtonTo = '';
  this.infoPanel.buttonIcon='';
  this.infoPanel.buttonMessage=''
  this.router.switchModus('infoPanel');
}

checkBeforSend(kindOfContact:string = 'whatsApp'){
  const action = this.actionsObj[kindOfContact];

  if(!this.shoppingList.checkForListLenght()){
    this.router.switchModus('noItemInList');
    return;
  }

  if (action) {
    action();
  } else {
     console.warn(`No action found for ${kindOfContact}`);
     return;
  }

  } 

  navToWhatsApp(){
    if (this.contact.phoneNumber.length === 0) {
        this.throwError('Phonenumber');      
      } else { 
        this.contact.sendWhatsApp();
        this.throwSuccess('WhatsApp') 
      }
  }

  navtoEmail(){
    if (this.contact.email.length === 0) {
      this.throwError('E-Mail');      
    } else { 
      this.contact.sendEmail();
      this.throwSuccess('E-Mail') 
    }
  }
  
  deleteAllItems(){
    this.router.switchModus('deleteAll')
  }

}
