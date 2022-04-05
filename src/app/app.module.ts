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

@NgModule({
  declarations: [
    AppComponent,
    MyFirstComponentComponent,
    InlineStyleComponentComponent,
    InlineTemplateComponentComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MyFirstModuleModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
