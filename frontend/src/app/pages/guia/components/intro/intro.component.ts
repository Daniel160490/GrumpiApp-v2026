import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-intro',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslateModule],
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent {
  disableRightClick(event: MouseEvent) {
    event.preventDefault();
  }
}