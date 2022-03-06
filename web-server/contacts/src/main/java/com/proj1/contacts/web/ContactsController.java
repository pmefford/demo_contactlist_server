package com.proj1.contacts.web;

import com.proj1.contacts.model.Contact;
import com.proj1.contacts.service.ContactService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;

@RestController
public class ContactsController {

    @Autowired
    private ContactService contactService;


    @ResponseBody
    @PostMapping(value = "/contacts")
    public Boolean createContact(@RequestBody Contact contact){
        return contactService.createContact(contact);
    }

    @ResponseBody
    @GetMapping(value = "/contacts/page", params = {"size", "page"})
    public Page<Contact> getContacts(Pageable pageable) {
        return contactService.getContactPage(pageable);
    }

    @ResponseBody
    @GetMapping(value = "/contact/{contactId}")
    public Contact getContact(@PathVariable("contactId") String contactId){
        return contactService.getContact(contactId);
    }

    @ResponseBody
    @PutMapping(value = "/contact/{contactId}")
    public Boolean updateContact(@PathVariable("contactId") String contactId, @RequestBody Contact contact){
        return contactService.updateContact(contactId,contact);
    }

    @ResponseBody
    @DeleteMapping(value = "/contact/{contactId}")
    public Boolean deleteContact(@PathVariable("contactId") String contactId){
        return contactService.deleteContact(contactId);
    }

}