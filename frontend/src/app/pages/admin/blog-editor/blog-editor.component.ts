import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './blog-editor.component.html',
  styleUrls: ['./blog-editor.component.scss']
})
export class BlogEditorComponent {
  post = {
    titulo: '',
    subtitulo: '',
    fecha: new Date().toISOString().split('T')[0],
    descripcion: '',
    fotos: [] as File[]
  };

  onFileSelected(event: any) {
    this.post.fotos = Array.from(event.target.files);
  }

  publicarPost() {
    console.log('Publicando post:', this.post);
    // Aquí conectarías con tu servicio para subir a Firebase/Backend
    alert('¡Post publicado con éxito!');
  }
}