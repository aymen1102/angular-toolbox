import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentInsideModuleComponent } from './component-inside-module/component-inside-module.component';



@NgModule({
  declarations: [
    ComponentInsideModuleComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ComponentInsideModuleComponent
  ]
})
export class MyFirstModuleModule { }
