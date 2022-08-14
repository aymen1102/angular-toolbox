import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inline-template-component',
  template: `
    <h4>
      Inline template component works without HTML file !
    </h4>
  `,
  styleUrls: ['./inline-template-component.component.css']
})
export class InlineTemplateComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
