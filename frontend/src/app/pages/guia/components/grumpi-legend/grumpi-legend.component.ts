import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-grumpi-legend',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslateModule],
  templateUrl: './grumpi-legend.component.html',
  styleUrls: ['./grumpi-legend.component.scss']
})
export class GrumpiLegendComponent {
  disableRightClick(event: MouseEvent) {
    event.preventDefault();
  }
}