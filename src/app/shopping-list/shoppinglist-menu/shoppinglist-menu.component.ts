import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../../share/icon/icon.component';
import { ShoppinglistService } from '../service/shoppinglist.service';
import { InfoPanelService } from '../service/info-panel.service';

@Component({
  selector: 'app-shoppinglist-menu',
  standalone: true,
  imports: [IconComponent, CommonModule],
  templateUrl: './shoppinglist-menu.component.html',
  styleUrl: './shoppinglist-menu.component.scss'
})
export class ShoppinglistMenuComponent {
constructor(public shoppingList : ShoppinglistService, public infoPanel:InfoPanelService){}
targetMenuIconId:string = '#shopping-list-menu'
isShowMenu:boolean = false;

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
  this.shoppingList.switchModus('infoPanel');
}

throwSuccess(name:string){
  this.infoPanel.headline = `${name} was successful`;
  this.infoPanel.message = `Your ${name}-Message is successfuly created. Check your Messages`;
  this.infoPanel.type = 'info';
  this.infoPanel.servingButtonTo = '';
  this.infoPanel.buttonIcon='';
  this.infoPanel.buttonMessage=''
  this.shoppingList.switchModus('infoPanel');
}

checkBeforSend(kindOfContact:string = 'whatsApp'){

if(this.shoppingList.checkForListLenght()){
      switch(kindOfContact){
        case 'whatsApp':  
          if(this.shoppingList.phoneNumber.length == 0){
            this.throwError('Phonenumber');
          }else {
            this.shoppingList.sendWhatsApp();
            this.throwSuccess('WhatsApp')
          }; 
          break;
        case 'email': 
          if(this.shoppingList.email.length > 0){
            console.log("sending E-Mail");
            this.throwSuccess('E-Mail');
          }else {
            this.throwError('E-Mail');
          }; 
          break;
        default: break;
      }
    } else {
      this.shoppingList.switchModus('noItemInList');
    }
  }

}
