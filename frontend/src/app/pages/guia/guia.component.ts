import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-guia',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslateModule],
  templateUrl: './guia.component.html',
  styleUrls: ['./guia.component.scss']
})
export class GuideComponent {
activeSection: string | null = null;

  toggleSection(section: string) {
    this.activeSection = this.activeSection === section ? null : section;
  }
}