import { Component } from '@angular/core';

@Component({
  selector: 'app-inline-style-component',
  templateUrl: './inline-style-component.component.html',
  styles: [
    `.custom{
      color: green;
      font-weight: bold;
    }`
  ]
})
export class InlineStyleComponentComponent {
}
