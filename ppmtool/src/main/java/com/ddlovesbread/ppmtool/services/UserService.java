package com.ddlovesbread.ppmtool.services;

import com.ddlovesbread.ppmtool.domain.User;
import com.ddlovesbread.ppmtool.exceptions.UsernameAlrExistException;
import com.ddlovesbread.ppmtool.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    public User saveUser(User newUser){
        try{
            newUser.setPassword(bCryptPasswordEncoder.encode(newUser.getPassword()));
            newUser.setUsername(newUser.getUsername());

            newUser.setConfirmPassword("");
            return userRepository.save(newUser);
        }catch (Exception e){
            throw new UsernameAlrExistException("Username '" + newUser.getUsername() + "' already exist.");
        }
    }

}
