import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent {
  password = '';

  constructor(private router: Router) {}

  login() {
    if (this.password === 'Grumpis2026') { 
      localStorage.setItem('isAdmin', 'true');
      this.router.navigate(['/admin/overview']);
    } else {
      alert('Contraseña incorrecta, ¿seguro que eres un profe Grumpi? 👾');
    }
  }
}