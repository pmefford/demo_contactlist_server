import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import {ContactService} from "./services/contact.service";
import {ContactDetailsComponent} from "./contact-details/contact-details.component";
import {HttpClientModule} from "@angular/common/http";
import {ContactCreateComponent} from "./contact-create/contact-create.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ContactUpdateComponent} from "./contact-update/contact-update.component";

@NgModule({
  declarations: [
    AppComponent,
    ContactPageComponent,
    ContactDetailsComponent,
    ContactCreateComponent,
    ContactUpdateComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    ContactService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
