package com.proj1.contacts.exception;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import javax.servlet.http.HttpServletRequest;
import java.util.NoSuchElementException;

@ControllerAdvice
public class ExceptionHandlingController {

    // Total control - setup a model and return the view name yourself. Or
    // consider subclassing ExceptionHandlerExceptionResolver (see below).
    @ExceptionHandler(InvalidModelException.class)
    public ResponseEntity<Object> handleError(HttpServletRequest req, InvalidModelException ex) {
        return ResponseEntity.status(400).body(ex.getModel());
    }

    @ExceptionHandler(NoSuchElementException.class)
    public ResponseEntity<Object> handleNoSuchElementException(HttpServletRequest req, NoSuchElementException ex) {
        return ResponseEntity.status(404).body(ex.getMessage());
    }
}
