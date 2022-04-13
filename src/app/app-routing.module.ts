import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutCompanyComponent } from './about-company/about-company.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { NoPageComponent } from './no-page/no-page.component';
import { UserComponent } from './user/user.component';
import { ListComponent } from './customers/list/list.component';
import { LoginComponent } from './customers/login/login.component';

const routes: Routes = [
  {
    component:AboutComponent,
    path:'about',
    children:[
      {
        component:AboutCompanyComponent,
        path:'company' 
      },
      {
        component:AboutMeComponent,
        path:'me'
      }
    ]
  },
  {
    component:UserComponent,
    path:'user/:id'
  },
  {
    component:HomeComponent,
    path:'home'
  },
  {
    component:NoPageComponent,
    path:'*'
  },
  {
    component:ListComponent,
    path:'list'
  },
  {
    component:LoginComponent,
    path:'login'
  },
  {
    path:'admin',
    loadChildren:()=>import('./admin/admin.module')
          .then(mod=>mod.AdminModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
