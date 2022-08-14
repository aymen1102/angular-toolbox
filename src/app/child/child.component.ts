import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() displaySecondBlock:boolean=false;
  @Input() item = "";
  @Output() updateInputTextEvent = new EventEmitter<string>();
  constructor() { }
  
 

  ngOnInit(): void {
  }

}
