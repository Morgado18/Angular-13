import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FirstComponentComponent } from './first-component/first-component.component';
import { ParentDataComponent } from './parent-data/parent-data.component';
import { DirectivesComponent } from './directives/directives.component';
import { IfRenderComponent } from './if-render/if-render.component';
import { EventosComponent } from './eventos/eventos.component';
import { EmiterComponent } from './emiter/emiter.component';
import { ChangeNumberComponent } from './change-number/change-number.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    FirstComponentComponent,
    ParentDataComponent,
    DirectivesComponent,
    IfRenderComponent,
    EventosComponent,
    EmiterComponent,
    ChangeNumberComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  title = 'Curso de Angular';
  userName = 'Guilherme';
  userData = {
    email: 'guilherme@gmail.com',
    role: 'Admin'
  }
}
