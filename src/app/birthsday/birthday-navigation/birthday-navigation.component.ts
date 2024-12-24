import { Component } from '@angular/core';
import { NavigationBirthdayService } from '../service/navigation-birthday.service';
import { IconComponent } from '../../share/icon/icon.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-birthday-navigation',
  standalone: true,
  imports: [IconComponent, CommonModule],
  templateUrl: './birthday-navigation.component.html',
  styleUrl: './birthday-navigation.component.scss'
})
export class BirthdayNavigationComponent {
  constructor(public router: NavigationBirthdayService) { }
  targetMenuIconId: string = '#birthday-menu'
  isShowMenu: boolean = false;

  private clickListener!: (event: MouseEvent) => void
  toggleMenu() {
    this.isShowMenu = !this.isShowMenu;
    if (this.isShowMenu) {
      window.addEventListener('click', this.clickListener);
    } else {
      window.removeEventListener('click', this.clickListener);
    }
  }

  ngOnInit() {
    this.clickListener = (event: MouseEvent) => this.checkForClick(event);
  }

  checkForClick(e: MouseEvent) {
    window.addEventListener('click', (e) => {
      const target = e.target as HTMLElement;
      if (this.isShowMenu && !target.closest(this.targetMenuIconId) && !target.closest('.menu-nav')) {
        this.toggleMenu();
      }
    });
  }
}
