import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-student-menu',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './student-menu.component.html',
  styleUrls: ['./student-menu.component.scss']
})
export class StudentMenuComponent {

  studentName = signal('¡Hola, Grumpi-Amigo!');
  hasNewPosts = signal(false);

  isEncargado = signal<boolean>(false);
  
  menuOptions = [
    { title: 'Grumpi Tienda', icon: '🏪', route: '/store', bg: '#ccffdd', border: '#00cc44' },
    { title: 'Mi Perfil', icon: '🛡️', route: '/profile', bg: '#e6f2ff', border: '#0066cc' },
    { title: 'Guía / Reglas', icon: '📜', route: '/guia', bg: '#fff0e6', border: '#ff6600' },
    { title: 'Grumpidex', icon: '📱', route: '/grumpidex', bg: '#ffe6f2', border: '#ff0080' },
    { title: 'Grumpi Blog', icon: '📰', route: '/blog', bg: '#f3e6ff', border: '#9933ff', key: 'blog' },
    // { title: 'Ajustes', icon: '⚙️', route: '/settings', bg: '#e6f9ff', border: '#33cfff' }
  ];

  ngOnInit() {
    this.checkNewPosts();
    this.checkRol();
  }

  disableRightClick(event: MouseEvent) {
    event.preventDefault();
  }

  checkNewPosts() {
    // 1. Aquí llamarías a tu servicio para obtener la fecha del último post publicado
    // Por ahora, simulamos una fecha de "último post"
    const lastPostDate = new Date('2026-06-10T10:00:00'); 
    
    // 2. Comparamos con la última vez que el alumno entró (guardada en localStorage)
    const lastVisit = localStorage.getItem('lastBlogVisit');
    
    if (!lastVisit || new Date(lastVisit) < lastPostDate) {
      this.hasNewPosts.set(true);
    }
  }

  checkRol() {
    // Simulamos que obtenemos el rol del alumno
    // Aquí consultarías tu servicio: this.authService.getStudentRole()...
    this.isEncargado.set(true); // Ejemplo: supongamos que este alumno SÍ es encargado
  }
}