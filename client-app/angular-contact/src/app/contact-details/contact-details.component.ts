import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {ContactService} from "../services/contact.service";
import {IContact} from "../model/contact.model";

@Component({
  selector: 'app-contact',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {
  contact: IContact = {} as IContact;
  error?: string;

  constructor(
    private contactService: ContactService,
    private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const contactId = routeParams.get('contactId');
    if( contactId ) {
      this.contactService.getContact(contactId)
        .subscribe( (c: IContact) => this.contact = c)

    } else {
      this.error = 'Contact not found';
    }
  }

  deleteContact() {
    this.contactService.deleteContact(this.contact.id).subscribe();
  }
}
