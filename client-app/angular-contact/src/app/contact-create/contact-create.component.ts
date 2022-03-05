import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormGroup, Validator, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {IContact} from "../model/contact.model";
import {ContactService} from "../services/contact.service";
import {UUID} from "angular2-uuid";

@Component({
  selector: 'app-contact-create',
  templateUrl: './contact-create.component.html',
  styleUrls: ['./contact-create.component.css']
})
export class ContactCreateComponent  implements OnInit {
  public newContactForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private contactService: ContactService) {
    this.newContactForm = formBuilder.group({});
  }


  ngOnInit(): void {
    this.newContactForm = this.formBuilder.group({
      nameControl:['',Validators.required],
      streetControl:['',Validators.required],
      cityControl:['',Validators.required],
      stateControl:['',Validators.required],
      zipControl:['',Validators.required],
      countryControl:['',Validators.required],
      phoneControl:['',Validators.required]
    });
  }

  saveContact(formGroupValues: any) {
    const contact = {
      id: UUID.UUID(),
      name: formGroupValues.nameControl,
      street: formGroupValues.streetControl,
      city: formGroupValues.cityControl,
      state: formGroupValues.stateControl,
      zip: formGroupValues.zipControl,
      country: formGroupValues.countryControl,
      phone: formGroupValues.phoneControl
    } as IContact;
    this.contactService.createContact(contact).subscribe(
      ()=> this.router.navigate(['contactsList']));

  }

  control(controlName: string) {
    return this.newContactForm.controls[controlName];
  }

  cancel() {
    this.router.navigate(['contactsList'])
  }
}
