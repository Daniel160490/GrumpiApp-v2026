import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

interface Post {
  id: number;
  titulo: string;
  autor: string;
  fecha: string;
  contenido: string;
  imagen?: string;
}

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslateModule],
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  posts: Post[] = [];

  ngOnInit(): void {
    localStorage.setItem('lastBlogVisit', new Date().toISOString());
    this.cargarPublicaciones();
  }

  cargarPublicaciones() {
    // Simulamos las publicaciones que harían los profesores
    this.posts = [
      {
        id: 1,
        titulo: "¡Nuevo evento de Halloween confirmado!",
        autor: "Profe Dani",
        fecha: "03/06/2026",
        contenido: "Preparad vuestros disfraces porque este año los Grumpis de tipo Oscuridad estarán campando a sus anchas por el aula.",
        imagen: "https://grumpistoreserver.onrender.com/uploads/grumpis/general/E1.1.png"
      },
      {
        id: 2,
        titulo: "Consejos para cuidar a tu Grumpi",
        autor: "Profe Sofía",
        fecha: "01/06/2026",
        contenido: "Recordad alimentar a vuestros Grumpis con los nutrientes correctos según su elemento para ganar experiencia más rápido."
      }
    ];
  }
}