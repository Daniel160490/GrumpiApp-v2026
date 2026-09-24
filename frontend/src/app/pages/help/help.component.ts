import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-help',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslateModule],
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.scss']
})
export class HelpComponent {
  enviarMensaje() {
    alert("Mensaje enviado a tu profesor tutor. ¡Te responderán pronto!");
  }
}