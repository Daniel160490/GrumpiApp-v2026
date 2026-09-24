import { Component, signal, computed, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule],
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  teacherName = signal('Prof. Daniel García');
  currentTime = signal(new Date());
  
  // Control del desplegable
  showStudentDirectory = signal(false);
  selectedGrade = signal<number | null>(null);
  grades = [1, 2, 3, 4, 5, 6];

  // Datos de ejemplo
  allStudents = [
    { name: 'Dani', grade: 1 }, { name: 'Lucía', grade: 1 },
    { name: 'Marcos', grade: 2 }, { name: 'Elena', grade: 2 },
    { name: 'Hugo', grade: 3 }, { name: 'Sofía', grade: 4 },
    { name: 'Javier', grade: 5 }, { name: 'Marta', grade: 6 }
  ];

  // Alumnos filtrados para el resumen rápido
  studentsInSelectedGrade = computed(() => {
    const grade = this.selectedGrade();
    return grade ? this.allStudents.filter(s => s.grade === grade) : [];
  });

  ngOnInit() {
    setInterval(() => this.currentTime.set(new Date()), 1000);
  }

  toggleDirectory() {
    this.showStudentDirectory.update(v => !v);
    if (!this.selectedGrade()) this.selectedGrade.set(1); // Por defecto 1º
  }

  stats = [
    { id: 'students', label: 'Total Alumnos', value: 124, icon: '🎓' },
    { id: 'courses', label: 'Cursos Activos', value: 6, icon: '📚' },
    { id: 'posts', label: 'Posts en Blog', value: 12, icon: '📢' }
  ];
}