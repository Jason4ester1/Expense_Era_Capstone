package com.ExpenseEra.Smart_Tracker;

import com.ExpenseEra.Smart_Tracker.model.Expense;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

class ExpenseTest {

    @Test
    void testExpenseCreation() {
        Expense expense = new Expense(1L, "Groceries", "Weekly groceries", "Food", 100, "January", "Debit", 1L);

        assertEquals(1L, expense.getId());
        assertEquals("Groceries", expense.getTitle());
        assertEquals("Weekly groceries", expense.getDescription());
        assertEquals("Food", expense.getCategory());
        assertEquals(100, expense.getAmount());
        assertEquals("January", expense.getMonth());
        assertEquals("Debit", expense.getType());
        assertEquals(1L, expense.getUserId());
    }
}