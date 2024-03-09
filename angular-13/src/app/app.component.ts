import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HomeComponent,
    UserComponent
  ],
   /*  templateUrl: './app.component.html', */
  template: `
    <main>
        <h1>
          Hello word!
          <br>
          I am currently studying Angular-17!
        </h1>
        <br>
        <app-home></app-home>
        <app-user></app-user>
    </main>
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Tutorial Angular-13';
  meunome = "Andrade";
}
