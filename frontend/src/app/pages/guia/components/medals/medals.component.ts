import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-medals',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslateModule],
  templateUrl: './medals.component.html',
  styleUrls: ['./medals.component.scss']
})
export class MedalsComponent {
    selectedMedal: any = null;

    medals = [
        { src: 'assets/medals/Medalla1_Agua.jpg', name: 'Agua' },
        { src: 'assets/medals/Medalla2_Tierra.jpg', name: 'Tierra' },
        { src: 'assets/medals/Medalla3_Vida.jpg', name: 'Vida' },
        { src: 'assets/medals/Medalla4_Fuego.jpg', name: 'Fuego' },
        { src: 'assets/medals/Medalla5_Aire.jpg', name: 'Aire' },
        { src: 'assets/medals/Medalla6_Rayo.jpg', name: 'Rayo' },
        { src: 'assets/medals/Medalla7_Normal.jpg', name: 'Normal' },
        { src: 'assets/medals/Medalla8_Oscuridad.jpg', name: 'Oscuridad' },
        { src: 'assets/medals/Medalla9_Luz.png', name: 'Luz' }
    ];

    disableRightClick(event: MouseEvent) { 
        event.preventDefault(); 
    }

    openMedal(medal: any) {
        this.selectedMedal = medal;
    }

    closeMedal() {
        this.selectedMedal = null;
    }
}