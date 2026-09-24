import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ItemTienda } from '../../models/itemTienda/itemTienda.model';

@Component({
  selector: 'app-grumpi-shop',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './grumpi-shop.component.html',
  styleUrls: ['./grumpi-shop.component.scss']
})
export class GrumpiShopComponent {
  // Estado del alumno (Puntos y Grumpidólares)
  grumpidolares = signal<number>(1450); 
  itemsComprados = signal<string[]>([]);
  categoriaSeleccionada = signal<string>('todos');

  // Catálogo de la tienda con la estética limpia
  items: ItemTienda[] = [
    { id: '1', name: 'Poción', description: 'Restaura vitalidad de tu Grumpi.', cost: 7, icon: '🧪', category: 'objetos', color: '#e6f2ff' },
    { id: '2', name: 'Antídoto', description: 'Cura estados alterados.', cost: 5, icon: '💊', category: 'objetos', color: '#fff0e6' },
    { id: '3', name: 'Despertador', description: '¡No llegues tarde al combate!', cost: 5, icon: '⏰', category: 'objetos', color: '#ffe6f2' },
    { id: '4', name: 'Gafas de sol', description: 'Estilo y protección contra ataques luz.', cost: 5, icon: '🕶️', category: 'objetos', color: '#e6f9ff' },
    { id: '5', name: 'Desfibrilador', description: 'Revive a un Grumpi debilitado.', cost: 5, icon: '⚡', category: 'objetos', color: '#f3e6ff' },
    { id: '6', name: 'Extintor', description: 'Ideal contra ataques de fuego.', cost: 5, icon: '🧯', category: 'objetos', color: '#e2e8f0' },
  ];
  cambiarCategoria(cat: string) {
    this.categoriaSeleccionada.set(cat);
  }

  comprarItem(item: ItemTienda) {
    if (this.grumpidolares() >= item.cost) {
      // Restar monedas
      this.grumpidolares.update(saldo => saldo - item.cost);
      // Añadir al inventario local
      this.itemsComprados.update(list => [...list, item.id]);
      alert(`¡Genial! Has conseguido: ${item.name} 🎉`);
    } else {
      alert('¡Vaya! No tienes suficientes Grumpidólares. ¡Sigue esforzándote en clase! 💪');
    }
  }
}