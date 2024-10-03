package com.ExpenseEra.Smart_Tracker.controller;

import java.util.HashMap;
import java.util.HashSet;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ExpenseEra.Smart_Tracker.dto.LoginRequestDTO;
import com.ExpenseEra.Smart_Tracker.model.User;
import com.ExpenseEra.Smart_Tracker.repository.UserRepository;
import com.ExpenseEra.Smart_Tracker.services.UserService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
@RequestMapping("api/users")
public class UserController {



    @Autowired
    private UserService userService;


    @Autowired
    private UserRepository userRepository;



    @PostMapping("/register")
    public ResponseEntity<?>  registerUser(@RequestBody User newUser) {

        Optional<User> existingUser = userService.registerUser(newUser);

        if(existingUser.isPresent()){
            return ResponseEntity.ok().body(existingUser.get());
        }

        if (!existingUser.isPresent()){
            HashMap response = new HashMap();
            response.put("message","Account already exists with this email" );

            return ResponseEntity.ok().body(response);
        }

        HashMap response = new HashMap();
        response.put("message","User Could Not Be Created" );

        return ResponseEntity.badRequest().body(response);

    }


    @PostMapping("/login")
    public ResponseEntity<?>  loginUser(@RequestBody LoginRequestDTO LoginRequest) {
        Optional<User> existingUser = userService.loginUser(LoginRequest.getEmail(), LoginRequest.getPassword());

        if(existingUser.isPresent()){
            return ResponseEntity.ok().body(existingUser.get());
        }

        HashMap response = new HashMap();
        response.put("message","Email Or Password is wrong" );

        return ResponseEntity.ok().body(response);
    }
    
    
}
