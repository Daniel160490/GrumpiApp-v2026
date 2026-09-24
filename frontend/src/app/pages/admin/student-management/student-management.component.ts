import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './student-management.component.html',
  styleUrls: ['./student-management.component.scss']
})
export class StudentManagementComponent {
  selectedCycle = signal<number>(1);
  cycles = [1, 2, 3, 4, 5, 6];

  // Simulación de datos: en el futuro vendrán de tu servicio
  students = signal([
    { id: 1, name: 'Dani', grade: 1, grumpis: 2, energy: 10, coins: 5 },
    { id: 2, name: 'Ana', grade: 2, grumpis: 5, energy: 20, coins: 15 }
  ]);

  // Filtro computado
  filteredStudents = computed(() => 
    this.students().filter(s => s.grade === this.selectedCycle())
  );

  save(student: any) {
    console.log('Guardando datos de:', student.name);
    // Aquí iría la lógica de tu servicio para persistir en Firebase/API
  }
}