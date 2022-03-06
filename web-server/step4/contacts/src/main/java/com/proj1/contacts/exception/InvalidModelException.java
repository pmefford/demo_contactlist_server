package com.proj1.contacts.exception;

public class InvalidModelException extends RuntimeException{
    private Object model;
    public InvalidModelException(String message, Object model) {
        super(message);
        this.model = model;
    }

    public Object getModel() {
        return model;
    }
}
