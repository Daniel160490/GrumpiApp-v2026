import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-energies',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslateModule],
  templateUrl: './energies.component.html',
  styleUrls: ['./energies.component.scss']
})
export class EnergiesComponent {
  
  // Si en el futuro quieres hacer el botón de 'desplegar' más información 
  // o añadir algún contador dinámico, lo harías aquí.
  
  constructor() {}

  disableRightClick(event: MouseEvent) {
    event.preventDefault();
  }
}