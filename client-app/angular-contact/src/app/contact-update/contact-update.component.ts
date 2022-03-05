import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormControl, FormGroup, Validator, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {IContact} from "../model/contact.model";
import {ContactService} from "../services/contact.service";
import {UUID} from "angular2-uuid";

@Component({
  selector: 'app-contact-update',
  templateUrl: './contact-update.component.html',
  styleUrls: ['./contact-update.component.css']
})
export class ContactUpdateComponent implements OnInit {
  public newContactForm: FormGroup;
  public contactRecord: IContact = {} as IContact;
  public error: any = undefined;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private route: ActivatedRoute,
              private contactService: ContactService) {
    this.newContactForm = formBuilder.group({});
  }


  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const contactId = routeParams.get('contactId');

    this.newContactForm = this.formBuilder.group({
      nameControl:['',Validators.required],
      streetControl:['',Validators.required],
      cityControl:['',Validators.required],
      stateControl:['',Validators.required],
      zipControl:['',Validators.required],
      countryControl:['',Validators.required],
      phoneControl:['',Validators.required]
    });
    if (contactId ) {
      this.contactService.getContact(contactId)
        .subscribe( c => {
          this.contactRecord = c;
          this.updateFormControls(c);

        });
    } else {
      this.error = 'Failed to get contact';
    }
  }

  updateContact(formGroupValues: any) {
    const contact = {
      id: this.contactRecord.id,
      name: formGroupValues.nameControl,
      street: formGroupValues.streetControl,
      city: formGroupValues.cityControl,
      state: formGroupValues.stateControl,
      zip: formGroupValues.zipControl,
      country: formGroupValues.countryControl,
      phone: formGroupValues.phoneControl
    } as IContact;
    this.contactService.updateContact(contact).subscribe(
      ()=> this.router.navigate(['contactsList']));

  }

  control(controlName: string) {
    if ( this.newContactForm.controls[controlName] ) {
      return this.newContactForm.controls[controlName];
    } else {
      return new FormControl('');
    }
  }

  cancel() {
    this.router.navigate(['contactsList'])
  }

  private updateFormControls(contact: IContact) {
    this.newContactForm.get('nameControl')?.setValue(contact.name);
    this.newContactForm.get('streetControl')?.setValue(contact.street);
    this.newContactForm.get('cityControl')?.setValue(contact.city);
    this.newContactForm.get('stateControl')?.setValue(contact.state);
    this.newContactForm.get('zipControl')?.setValue(contact.zip);
    this.newContactForm.get('countryControl')?.setValue(contact.country);
    this.newContactForm.get('phoneControl')?.setValue(contact.phone);
  }
}
