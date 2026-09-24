import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

interface Curso { id: string; name: string; }
interface Alumno { id: string; name: string; avatar: string; }

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  // Estados usando Signals
  currentStep = signal<'curso' | 'alumno' | 'pin'>('curso');
  selectedCurso = signal<string | null>(null);
  selectedAlumno = signal<Alumno | null>(null);
  pinCode = signal<string>('');

  // Datos Mockeados (Esto luego vendrá de tu base de datos de Python/Firebase)
  cursos: Curso[] = [
    { id: '1a', name: '3º de Primaria A' },
    { id: '1b', name: '3º de Primaria B' },
    { id: '2a', name: '4º de Primaria A' }
  ];

  alumnosMock: Record<string, Alumno[]> = {
    '1a': [
      { id: 'al1', name: 'Lucas G.', avatar: '🦖' },
      { id: 'al2', name: 'Sofía M.', avatar: 'unicornio' }, // Puedes usar emojis o rutas a imágenes de los Grumpis
      { id: 'al3', name: 'Mateo X.', avatar: '🐱' },
      { id: 'al4', name: 'Elena R.', avatar: '🦊' }
    ],
    '1b': [
      { id: 'al5', name: 'Alba V.', avatar: '🐼' },
      { id: 'al6', name: 'Hugo P.', avatar: '🦁' }
    ]
  };

  // Alumnos filtrados automáticamente según el curso seleccionado
  filteredAlumnos = computed(() => {
    const cursoId = this.selectedCurso();
    return cursoId ? this.alumnosMock[cursoId] || [] : [];
  });

  constructor(private router: Router) {}

  selectCurso(cursoId: string) {
    this.selectedCurso.set(cursoId);
    this.currentStep.set('alumno');
  }

  selectAlumno(alumno: Alumno) {
    this.selectedAlumno.set(alumno);
    this.currentStep.set('pin');
  }

  pressKey(num: string) {
    if (this.pinCode().length < 4) {
      this.pinCode.update(val => val + num);
    }
    
    // Si llega a 4 dígitos, validamos automáticamente
    if (this.pinCode().length === 4) {
      this.verifyPin();
    }
  }

  deleteKey() {
    this.pinCode.update(val => val.slice(0, -1));
  }

  verifyPin() {
    // Aquí irá la llamada al backend. Por ahora, si pone cualquier PIN de 4 dígitos, entra:
    console.log(`Logueando a ${this.selectedAlumno()?.name} con PIN ${this.pinCode()}`);
    
    // Resetear y navegar
    this.router.navigate(['/menu']);
  }

  goBack() {
    if (this.currentStep() === 'pin') {
      this.pinCode.set('');
      this.currentStep.set('alumno');
    } else if (this.currentStep() === 'alumno') {
      this.selectedCurso.set(null);
      this.currentStep.set('curso');
    }
  }
}