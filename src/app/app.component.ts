import { Component, signal } from '@angular/core';

import { LeftSideBarComponent } from './Components/left-side-bar/left-side-bar.component';
import { MainBodyComponent } from './Components/main-body/main-body.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LeftSideBarComponent, MainBodyComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'AppZone';
  collapsedValue = false;
  isLeftSideCollapsed = signal<boolean>(this.collapsedValue);

  constructor() {
    this.collapsedValue = (localStorage.getItem('leftMenuCollapseState') == 'true') ? true : false;
  }

  changeLeftSideBar(value: boolean) {
    localStorage.setItem('leftMenuCollapseState', (value ? "true" : "false"));
    this.isLeftSideCollapsed.set(value);
  }

}
