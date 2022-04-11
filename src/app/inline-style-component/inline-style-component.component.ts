import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inline-style-component',
  templateUrl: './inline-style-component.component.html',
  styles: [
    `.custom{
      color:green
    }`
  ]
})
export class InlineStyleComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}