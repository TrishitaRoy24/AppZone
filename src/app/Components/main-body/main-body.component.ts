import { Component } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main-body',
  standalone: true,
  imports: [MatSlideToggleModule, RouterOutlet],
  templateUrl: './main-body.component.html',
  styleUrl: './main-body.component.scss'
})
export class MainBodyComponent {

}
