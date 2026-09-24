import { Component, OnInit, signal } from '@angular/core'; // Importamos signal
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

interface Objeto {
  id: number;
  nombre: string;
  imagen: string;
  cantidad: number;
  descripcion: string;
  categoria: 'objetos' | 'grumpis' | 'mejoras'; 
}

@Component({
  selector: 'app-bag',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslateModule],
  templateUrl: './bag.component.html',
  styleUrls: ['./bag.component.scss']
})
export class BagComponent implements OnInit {
  categoriaSeleccionada = signal<'todos' | 'objetos' | 'grumpis' | 'mejoras'>('todos');
  
  objetosMochila: Objeto[] = [];

  ngOnInit(): void {
    this.cargarMochila();
  }

  cargarMochila() {
    this.objetosMochila = [
      { id: 1, nombre: 'Poción Energía', imagen: 'assets/items/pocion.png', cantidad: 5, descripcion: 'Recupera 20 PS.', categoria: 'objetos' },
      { id: 2, nombre: 'Losa Agua', imagen: 'assets/items/losa_agua.png', cantidad: 1, descripcion: 'Evoluciona Grumpis.', categoria: 'objetos' },
      { id: 3, nombre: 'Bugi', imagen: 'assets/items/bugi.png', cantidad: 1, descripcion: 'Tu compañero inicial.', categoria: 'grumpis' },
      { id: 4, nombre: 'Velocidad +', imagen: 'assets/items/speed.png', cantidad: 2, descripcion: 'Aumenta velocidad en combate.', categoria: 'mejoras' }
    ];
  }

  cambiarCategoria(cat: 'todos' | 'objetos' | 'grumpis' | 'mejoras') {
    this.categoriaSeleccionada.set(cat);
  }

  // Getter para obtener solo lo que toca mostrar
  get objetosFiltrados() {
    if (this.categoriaSeleccionada() === 'todos') return this.objetosMochila;
    return this.objetosMochila.filter(o => o.categoria === this.categoriaSeleccionada());
  }

  disableRightClick(event: MouseEvent) {
    event.preventDefault();
  }
}