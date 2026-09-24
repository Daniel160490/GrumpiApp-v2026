import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

// Interfaces que definen la estructura exacta de tu JSON
export interface Ataque {
  nombre: string;
  efecto: string;
  tipo?: string;
}

export interface Grumpi {
  id: number;
  trainer_id: number;
  nombre: string;
  PS: number;
  n_grumpidex: string;
  clase: string;
  img_general: string;
  img_conseguir: string;
  descripcion: string;
  Ciclo1?: string;
  Ciclo2?: string;
  Ciclo3?: string;
  ataques: Ataque[];
  tipo: string;
}

@Component({
  selector: 'app-grumpidex',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslateModule],
  templateUrl: './grumpidex.component.html',
  styleUrls: ['./grumpidex.component.scss']
})
export class GrumpidexComponent implements OnInit {
  
  // Lista maestra con todos los Grumpis
  grumpisList: Grumpi[] = [];
  
  // Lista que se mostrará en pantalla (cambia al buscar)
  filteredGrumpis: Grumpi[] = [];
  
  // Grumpi seleccionado para mostrar en el modal
  selectedGrumpi: Grumpi | null = null;

  ngOnInit(): void {
    this.cargarGrumpis();
  }

  cargarGrumpis() {
    // AQUÍ PEGAS TU ARRAY JSON COMPLETO (He puesto los 3 primeros de ejemplo)
    this.grumpisList = [
      {
        "id": 1,
        "trainer_id": 0,
        "nombre": "Bugi",
        "PS": 100,
        "n_grumpidex": "001",
        "clase": "basico",
        "img_general": "https://grumpistoreserver.onrender.com/uploads/grumpis/general/001.1.png",
        "img_conseguir": "https://grumpistoreserver.onrender.com/uploads/grumpis/howToGetGrumpis/_001._1.jpg",
        "descripcion": "Pequeño gusano con forma de seta, la cual utiliza para pasar inadvertido de sus depredadores.",
        "Ciclo1": "Realizar un trabajo de algo visto en la asignatura de ciencias de la naturaleza.",
        "Ciclo2": "Realizar un trabajo de algo visto en la asignatura de ciencias de la naturaleza.",
        "Ciclo3": "Realizar un trabajo de algo visto en la asignatura de ciencias de la naturaleza.",
        "ataques": [
          { "nombre": "Placaje", "efecto": "10", "tipo": "Normal" },
          { "nombre": "Espora seta", "efecto": "30", "tipo": "Vida" }
        ],
        "tipo": "Vida"
      },
    ];

    // Al iniciar, la lista filtrada es igual a la lista completa
    this.filteredGrumpis = [...this.grumpisList];
  }

  // Buscador en tiempo real por nombre o número
  buscarGrumpi(event: Event) {
    const term = (event.target as HTMLInputElement).value.toLowerCase();
    this.filteredGrumpis = this.grumpisList.filter(g => 
      g.nombre.toLowerCase().includes(term) || 
      g.n_grumpidex.includes(term)
    );
  }

  // Selecciona un Grumpi para abrir su ficha en el modal
  abrirFicha(grumpi: Grumpi) {
    this.selectedGrumpi = grumpi;
  }

  // Mapea el texto del tipo a una clase CSS de color
  getColorClass(tipo: string): string {
    const t = tipo.toLowerCase();
    const mapaColores: { [key: string]: string } = {
      'vida': 'bg-vida',
      'agua': 'bg-agua',
      'fuego': 'bg-fuego',
      'rayo': 'bg-rayo',
      'aire': 'bg-aire',
      'tierra': 'bg-tierra',
      'luz': 'bg-luz',
      'oscuridad': 'bg-oscuridad',
      'normal': 'bg-normal'
    };
    return mapaColores[t] || 'bg-normal';
  }

  disableRightClick(event: MouseEvent) {
    event.preventDefault();
  }
}