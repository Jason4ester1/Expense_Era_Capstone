package com.ExpenseEra.Smart_Tracker;

import com.ExpenseEra.Smart_Tracker.dto.LoginRequestDTO;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

class LoginRequestDTOTest {

    @Test
    void testLoginRequestDTOCreation() {
        LoginRequestDTO loginRequestDTO = new LoginRequestDTO();
        loginRequestDTO.setEmail("test@example.com");
        loginRequestDTO.setPassword("securePassword");

        assertEquals("test@example.com", loginRequestDTO.getEmail());
        assertEquals("securePassword", loginRequestDTO.getPassword());
    }
}