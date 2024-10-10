package com.ExpenseEra.Smart_Tracker;

import com.ExpenseEra.Smart_Tracker.model.Expense;
import com.ExpenseEra.Smart_Tracker.model.User;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

import java.util.ArrayList;
import java.util.List;

class UserTest {

    @Test
    void testUserCreation() {
        List<Expense> expenses = new ArrayList<>();
        expenses.add(new Expense(1L, "Groceries", "Weekly groceries", "Food", 100, "January", "Debit", 1L));

        User user = new User(1L, "John", "Doe", "john.doe@example.com", "securePassword", 5000L, expenses);

        assertEquals(1L, user.getId());
        assertEquals("John", user.getFirstName());
        assertEquals("Doe", user.getLastName());
        assertEquals("john.doe@example.com", user.getEmail());
        assertEquals("securePassword", user.getPassword());
        assertEquals(5000L, user.getMonthlyIncome());
        assertEquals(1, user.getExpenses().size());
        assertEquals("Groceries", user.getExpenses().get(0).getTitle());
    }

    @Test
    void testAddExpense() {
        User user = new User();
        Expense expense = new Expense(1L, "Rent", "Monthly rent", "Housing", 1200, "January", "Debit", 1L);
        user.getExpenses().add(expense);

        assertEquals(1, user.getExpenses().size());
        assertEquals("Rent", user.getExpenses().get(0).getTitle());
    }
}