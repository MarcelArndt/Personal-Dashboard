import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../../share/icon/icon.component';
import { ShoppinglistService } from '../service/shoppinglist.service';

@Component({
  selector: 'app-shoppinglist-menu',
  standalone: true,
  imports: [IconComponent, CommonModule],
  templateUrl: './shoppinglist-menu.component.html',
  styleUrl: './shoppinglist-menu.component.scss'
})
export class ShoppinglistMenuComponent {
constructor(public shoppingList : ShoppinglistService ){}
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

}
