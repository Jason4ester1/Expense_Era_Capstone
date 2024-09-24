package com.ExpenseEra.Smart_Tracker.Services.expense;

import com.ExpenseEra.Smart_Tracker.dto.ExpenseDTO;
import com.ExpenseEra.Smart_Tracker.entity.Expense;

import java.util.List;

public interface ExpenseService {

    Expense postExpense (ExpenseDTO expenseDTO);

    List<Expense> getAllExpense();
}
