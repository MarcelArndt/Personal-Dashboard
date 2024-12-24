import { Component } from '@angular/core';
import { IconComponent } from '../share/icon/icon.component';
import { BirthdayNavigationComponent } from './birthday-navigation/birthday-navigation.component';


@Component({
  selector: 'app-birthsday',
  standalone: true,
  imports: [IconComponent, BirthdayNavigationComponent],
  templateUrl: './birthsday.component.html',
  styleUrl: './birthsday.component.scss'
})
export class BirthsdayComponent {

}
