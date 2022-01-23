import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FooterComponent } from './footer/footer.component';
import { FormContactComponent } from './form-contact/form-contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavegationComponent } from './navegation/navegation.component';
import { ServicesComponent } from './services/services.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { NavSimpleComponent } from './nav-simple/nav-simple.component';
import { PpSsComponent } from './pp-ss/pp-ss.component';
import { AlianzaUserComponent } from './alianza-user/alianza-user.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    FooterComponent,
    FormContactComponent,
    NavegationComponent,
    ServicesComponent,
    NosotrosComponent,
    NavSimpleComponent,
    PpSsComponent,
    AlianzaUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //Se importa para el formulario
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
