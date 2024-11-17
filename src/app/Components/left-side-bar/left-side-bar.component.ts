import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

interface items{
  link: string;
  lable: string;
  icon: string;
}

@Component({
  selector: 'app-left-side-bar',
  standalone: true,
  imports: [MatIconModule, RouterModule],
  templateUrl: './left-side-bar.component.html',
  styleUrl: './left-side-bar.component.scss'
})
export class LeftSideBarComponent {

  menuItems: items[] = [
    {
      link: 'dashboard',
      lable: 'Dashboard',
      icon: 'dashboard'
    },
    {
      link: 'products',
      lable: 'Products',
      icon: 'shopping_cart'
    },
    {
      link: 'settings',
      lable: 'Settings',
      icon: 'settings'
    }
  ]
}
