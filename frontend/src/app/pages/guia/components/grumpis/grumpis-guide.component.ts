import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-grumpis-rules',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './grumpis-guide.component.html',
  styleUrls: ['./grumpis-guide.component.scss']
})
export class GrumpisRulesComponent {
}