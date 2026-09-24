import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-grumpidolares',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslateModule],
  templateUrl: './grumpidolares.component.html',
  styleUrls: ['./grumpidolares.component.scss']
})
export class GrumpidolaresComponent {
  disableRightClick(event: MouseEvent) { event.preventDefault(); }
}