package com.ddlovesbread.ppmtool.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.BAD_REQUEST)
public class UsernameAlrExistException extends RuntimeException{

    public UsernameAlrExistException(String message){
        super(message);
    }
}
