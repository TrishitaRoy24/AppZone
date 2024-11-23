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
  isLeftSideCollapsed = signal<boolean>(false);

  changeLeftSideBar(value: boolean) {
    this.isLeftSideCollapsed.set(value);
  }

}
