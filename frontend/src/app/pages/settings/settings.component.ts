import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslateModule],
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent {
  // Estado simple de los ajustes
  settings = {
    soundEnabled: true,
    notificationsEnabled: false,
    darkMode: false
  };

  toggleSetting(key: keyof typeof this.settings) {
    this.settings[key] = !this.settings[key];
  }

  logOut() {
    console.log('Cerrando sesión desde ajustes...');
  }
}