package com.ExpenseEra.Smart_Tracker.services;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ExpenseEra.Smart_Tracker.model.User;
import com.ExpenseEra.Smart_Tracker.repository.UserRepository;

@Service
public class UserService {



    @Autowired
    UserRepository userRepository;


    public Optional<User> saveUser(User user){
        return Optional.of(userRepository.save(user));
    }


    public Optional<User> registerUser(User newPotentialUser){
        Optional <User> user = userRepository.findByEmail(newPotentialUser.getEmail());

        if(!user.isPresent()){
         return Optional.of(userRepository.save(newPotentialUser));
        }

        return Optional.empty();
    }



    public Optional<User> loginUser(String email, String password){
        Optional<User> user = userRepository.findByEmail(email);

        if(user.isPresent()){
            User foundUser = user.get();

            if( foundUser.getPassword().equals(password)){
                return Optional.of(foundUser);
            }
            
        }

        return Optional.empty();
    }






}
