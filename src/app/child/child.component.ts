import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input() displaySecondBlock:boolean=false;
  @Input() text = "";
  @Output() pushTextToParentEvent = new EventEmitter<string>();
}
