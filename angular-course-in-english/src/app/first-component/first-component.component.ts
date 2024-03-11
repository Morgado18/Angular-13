import { Component } from '@angular/core';

@Component({
  selector: 'app-first-component',
  standalone: true,
  imports: [],
  templateUrl: './first-component.component.html',
  styleUrl: './first-component.component.scss'
})
export class FirstComponentComponent {
  name = "Andrade"
  age: number = 18
  job = "T.I"
  address = "Angola/Luanda/Viana"
  hobbies = [
    'Estudar web',
    'Assitir Neflix'
  ]
  car = {
    name: 'Lexus-LX570',
    year: 2022
  }
}
