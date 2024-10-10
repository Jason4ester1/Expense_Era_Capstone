package com.ExpenseEra.Smart_Tracker;

import com.ExpenseEra.Smart_Tracker.model.Expense;
import com.ExpenseEra.Smart_Tracker.repository.ExpenseRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.context.ActiveProfiles;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@DataJpaTest
@ActiveProfiles("test")
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
class ExpenseRepositoryTest {

    @Autowired
    private ExpenseRepository expenseRepository;

    @Test
    void testSaveAndFindAll() {
        // Given
        Expense expense = new Expense(null, "Groceries", "Weekly groceries", "Food", 100, "January", "Debit", 1L);
        expenseRepository.save(expense);

        // When
        List<Expense> expenses = expenseRepository.findAll();

        // Then
        assertFalse(expenses.isEmpty());
        assertEquals("Groceries", expenses.get(0).getTitle());
    }
}