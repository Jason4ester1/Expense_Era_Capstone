package com.ExpenseEra.Smart_Tracker;

import com.ExpenseEra.Smart_Tracker.dto.IncomeDTO;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

import java.time.LocalDate;

class IncomeDTOTest {

    @Test
    void testIncomeDTOCreation() {
        LocalDate date = LocalDate.of(2023, 10, 1);
        IncomeDTO incomeDTO = new IncomeDTO();
        incomeDTO.setId(1L);
        incomeDTO.setTitle("Salary");
        incomeDTO.setDescription("Monthly salary");
        incomeDTO.setCategory("Job");
        incomeDTO.setDate(date);
        incomeDTO.setAmount(5000);

        assertEquals(1L, incomeDTO.getId());
        assertEquals("Salary", incomeDTO.getTitle());
        assertEquals("Monthly salary", incomeDTO.getDescription());
        assertEquals("Job", incomeDTO.getCategory());
        assertEquals(date, incomeDTO.getDate());
        assertEquals(5000, incomeDTO.getAmount());
    }
}