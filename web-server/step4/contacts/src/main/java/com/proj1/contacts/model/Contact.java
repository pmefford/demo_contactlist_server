package com.proj1.contacts.model;

import javax.persistence.*;

@Entity
@Table(name = "contacts")
public class Contact {
    @Id
    @Column(name = "id", columnDefinition = "Varchar(255)")
    private String id;

    @Column(name = "name", columnDefinition = "Varchar(255)")
    private String name;

    @Column(name = "street", columnDefinition = "Varchar(255)")
    private String street;

    @Column(name = "city", columnDefinition = "Varchar(255)")
    private String city;

    @Column(name = "state", columnDefinition = "Varchar(255)")
    private String state;

    @Column(name = "zip", columnDefinition = "Varchar(255)")
    private String zip;

    @Column(name = "country", columnDefinition = "Varchar(255)")
    private String country;

    @Column(name = "phone", columnDefinition = "Varchar(255)")
    private String phone;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getStreet() {
        return street;
    }

    public void setStreet(String street) {
        this.street = street;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public String getZip() {
        return zip;
    }

    public void setZip(String zip) {
        this.zip = zip;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }
}


