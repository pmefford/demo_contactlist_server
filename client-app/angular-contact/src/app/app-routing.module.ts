import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ContactDetailsComponent} from "./contact-details/contact-details.component";
import {ContactPageComponent} from "./contact-page/contact-page.component";
import {ContactCreateComponent} from "./contact-create/contact-create.component";
import {ContactUpdateComponent} from "./contact-update/contact-update.component";

const routes: Routes = [
  { path: 'contact/:contactId', component: ContactDetailsComponent },
  { path: 'updateContact/:contactId', component: ContactUpdateComponent },
  { path:  'contactsList',  component: ContactPageComponent },
  { path:  'createContact',  component: ContactCreateComponent },
  { path: '', redirectTo: '/contactsList', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
