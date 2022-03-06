package com.proj1.contacts.service;

import com.proj1.contacts.data.ContactsRepository;
import com.proj1.contacts.exception.InvalidModelException;
import com.proj1.contacts.model.Contact;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.BeanCreationNotAllowedException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
public class ContactService {

    Logger logger = LoggerFactory.getLogger(ContactService.class);
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
        Contact contact1 = null;
        try {
            contact1 = contactsRepository.save(contact);
        }catch ( Exception e){
            logger.error("update failed" ,e);
            throw e;
        }
        return (contact1!=null)?Boolean.TRUE:Boolean.FALSE;
    }
    public Boolean deleteContact(String uuid) {
        contactsRepository.deleteById(uuid);
        return Boolean.TRUE;
    }
}
