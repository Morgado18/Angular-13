import { Component } from '@angular/core';

@Component({
  selector: 'app-eventos',
  standalone: true,
  imports: [],
  templateUrl: './eventos.component.html',
  styleUrl: './eventos.component.scss'
})
export class EventosComponent {
  show: boolean = false
  showSms(): void{
    this.show = !this.show /* inverte os values, faz o papel do toogle, adiciona se ñ haver e remove se haver */
  }
}
