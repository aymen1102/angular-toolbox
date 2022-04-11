import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyFirstComponentComponent } from './my-first-component/my-first-component.component';
import { InlineStyleComponentComponent } from './inline-style-component/inline-style-component.component';
import { InlineTemplateComponentComponent } from './inline-template-component/inline-template-component.component';
import { MyFirstModuleModule } from './my-first-module/my-first-module.module';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { ChildComponent } from './child/child.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { ConvertUsdToGbpPipe } from './pipes/convert-usd-to-gbp.pipe';
import { RedElementDirective } from './directives/red-element.directive';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { UserComponent } from './user/user.component';
import { NoPageComponent } from './no-page/no-page.component';
import { AboutCompanyComponent } from './about-company/about-company.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MyFirstComponentComponent,
    InlineStyleComponentComponent,
    InlineTemplateComponentComponent,
    HeaderComponent,
    ChildComponent,
    UserDetailsComponent,
    ConvertUsdToGbpPipe,
    RedElementDirective,
    HomeComponent,
    AboutComponent,
    UserComponent,
    NoPageComponent,
    AboutCompanyComponent,
    AboutMeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MyFirstModuleModule,
    FormsModule,
    NgbModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatButtonModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
