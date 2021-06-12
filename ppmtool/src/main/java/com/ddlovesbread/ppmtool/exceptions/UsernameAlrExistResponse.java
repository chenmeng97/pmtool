package com.ddlovesbread.ppmtool.exceptions;

public class UsernameAlrExistResponse {

    private String username;

    public UsernameAlrExistResponse(String username){
        this.username = username;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }
}
