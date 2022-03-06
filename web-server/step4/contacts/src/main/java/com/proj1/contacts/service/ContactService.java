package com.proj1.contacts.service;

import com.proj1.contacts.data.ContactsRepository;
import com.proj1.contacts.exception.InvalidModelException;
import com.proj1.contacts.model.Contact;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;


@Service
public class ContactService {
    @Autowired
    ContactsRepository contactsRepository;


    public Boolean createContact(Contact contact) {
        if ( contact.getId() == null ) {
            throw new InvalidModelException("contact has no id", contact);
        }
        Contact contact1 = contactsRepository.save(contact);
        return (contact1!=null)?Boolean.TRUE:Boolean.FALSE;
    }
    public Page<Contact> getContactPage(Pageable pageable) {
        return contactsRepository.findAll(pageable);
    }
    public Contact getContact(String uuid) {
        return contactsRepository.findById(uuid).orElseThrow();
    }

    public Boolean updateContact(String contactId, Contact contact) {
        contact.setId(contactId);
        Contact contact1 = contactsRepository.save(contact);
        return (contact1!=null)?Boolean.TRUE:Boolean.FALSE;
    }
    public Boolean deleteContact(String uuid) {
        contactsRepository.deleteById(uuid);
        return Boolean.TRUE;
    }
}
