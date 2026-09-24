import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { Encargo } from '../../models/encargado/encargado.model';
import { Avatar } from '../../models/avatar/avatar.model';
import { EnergiaIcon } from '../../models/energia/energia.model';
import { Medalla } from '../../models/medalla/medalla.model';


@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslateModule],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  
  encargoAsignado = signal<Encargo | null>(null);
  
  
  username: string = 'Cargando...';

  
  avatarSelect: string = 'assets/logo/logoApp.png';
  grumpidolar: number = 0;
  totalEnergias: number = 0;
  marcasCombate: number[] = [];
  medallasConseguidas: number[] = [1, 2, 3]; 
  medallasDisponibles: Medalla[] = [
    { id: 1, nombre: 'Agua', archivo: 'Medalla1_Agua.jpg' },
    { id: 2, nombre: 'Tierra', archivo: 'Medalla2_Tierra.jpg' },
    { id: 3, nombre: 'Vida', archivo: 'Medalla3_Vida.jpg' },
    { id: 4, nombre: 'Fuego', archivo: 'Medalla4_Fuego.jpg' },
    { id: 5, nombre: 'Aire', archivo: 'Medalla5_Aire.jpg' },
    { id: 6, nombre: 'Rayo', archivo: 'Medalla6_Rayo.jpg' },
    { id: 7, nombre: 'Normal', archivo: 'Medalla7_Normal.jpg' },
    { id: 8, nombre: 'Oscuridad', archivo: 'Medalla8_Oscuridad.jpg' },
    { id: 9, nombre: 'Luz', archivo: 'Medalla9_Luz.png' }
  ];

  // Listados para los modales
  avatarList: Avatar[] = [];
  energiasList: EnergiaIcon[] = [];

  ngOnInit(): void {
    this.cargarDatosMock();
    this.asignarRolMock();
  }

  get medallasAlumno(): Medalla[] {
    return this.medallasDisponibles.filter(m => this.medallasConseguidas.includes(m.id));
  }

  cargarDatosMock() {
    this.username = 'Álex García';
    this.grumpidolar = 340;
    this.marcasCombate = [1, 2, 3]; 
    this.medallasConseguidas = [1, 2, 3, 4];
    this.avatarList = [
      { id: '1', imagen: '🦖' },
      { id: '2', imagen: '🦊' },
      { id: '3', imagen: 'assets/logo/logoApp.png' }
    ];

    // Array unificado para pintar el modal de energías mucho más limpio
    this.energiasList = [
      { imagen: '💧', nombreKey: 'PROFILE_COMPONENT.ENERGIES.WATER', cantidad: 2, colorClass: 'bg-blue' },
      { imagen: '🔥', nombreKey: 'PROFILE_COMPONENT.ENERGIES.FIRE', cantidad: 1, colorClass: 'bg-red' },
      { imagen: '💨', nombreKey: 'PROFILE_COMPONENT.ENERGIES.WIND', cantidad: 0, colorClass: 'bg-gray' },
      { imagen: '✨', nombreKey: 'PROFILE_COMPONENT.ENERGIES.LIGHT', cantidad: 0, colorClass: 'bg-yellow' },
      { imagen: '⚡', nombreKey: 'PROFILE_COMPONENT.ENERGIES.LIGHTNING', cantidad: 2, colorClass: 'bg-orange' }
      // Añade el resto según necesites
    ];

    this.totalEnergias = this.energiasList.reduce((acc, curr) => acc + curr.cantidad, 0);
  }

  seleccionarAvatar(avatar: Avatar) {
    this.avatarSelect = avatar.imagen;
  }

  logOut() {
    console.log('Cerrando sesión...');
  }

  disableRightClick(event: MouseEvent) {
    event.preventDefault();
  }

  asignarRolMock() {
    const nuevoRol: Encargo = {
      rol: 'Policía Grumpi',
      icono: '👮',
      tareas: [
        'Velar por el silencio en el aula.',
        'Anotar incidencias en el diario de clase.',
        'Ayudar a los compañeros a cumplir las normas.'
      ]
    };
    
    this.encargoAsignado.set(nuevoRol);
  }

  actualizarRol(nuevoRol: Encargo | null) {
    this.encargoAsignado.set(nuevoRol);
  }
}