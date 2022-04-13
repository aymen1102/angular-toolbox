import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthentifiactionComponent } from './authentifiaction/authentifiaction.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path:'authentification', component:AuthentifiactionComponent},
  {path:'register', component:RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
