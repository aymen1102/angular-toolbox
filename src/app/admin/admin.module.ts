import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AuthentifiactionComponent } from './authentifiaction/authentifiaction.component';
import { RegisterComponent } from './register/register.component';

console.warn("Admin module loaded !")
@NgModule({
  declarations: [
    AuthentifiactionComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
