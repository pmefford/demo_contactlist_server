import { Component, OnInit } from '@angular/core';
import {IPage} from "../model/page.model";
import {ContactService} from "../services/contact.service";
import {Router} from "@angular/router";
import {IvyParser} from "@angular/compiler";

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent implements OnInit {
  contactPage: IPage= {} as IPage;

  constructor(
    private contactService: ContactService
  ) { }

  ngOnInit(): void {
    this.contactService.getContactsPage(0, 30)
      .subscribe( (page: IPage) => this.contactPage = page)
  }

  deleteContact(id: string) {
    this.contactService.deleteContact(id)
      .subscribe( )
  }
}
