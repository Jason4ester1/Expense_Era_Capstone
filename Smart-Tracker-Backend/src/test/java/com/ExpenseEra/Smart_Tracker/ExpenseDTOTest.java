package com.ExpenseEra.Smart_Tracker;

import com.ExpenseEra.Smart_Tracker.dto.ExpenseDTO;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

import java.time.LocalDate;

class ExpenseDTOTest {

    @Test
    void testExpenseDTOCreation() {
        LocalDate date = LocalDate.of(2023, 10, 1);
        ExpenseDTO expenseDTO = new ExpenseDTO();
        expenseDTO.setId(1L);
        expenseDTO.setTitle("Groceries");
        expenseDTO.setDescription("Weekly groceries");
        expenseDTO.setCategory("Food");
        expenseDTO.setDate(date);
        expenseDTO.setAmount(100);

        assertEquals(1L, expenseDTO.getId());
        assertEquals("Groceries", expenseDTO.getTitle());
        assertEquals("Weekly groceries", expenseDTO.getDescription());
        assertEquals("Food", expenseDTO.getCategory());
        assertEquals(date, expenseDTO.getDate());
        assertEquals(100, expenseDTO.getAmount());
    }
}