package com.proj1.contacts.data;

import com.proj1.contacts.model.Contact;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface ContactsRepository extends JpaRepository<Contact, String> {

}
