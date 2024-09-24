package com.ExpenseEra.Smart_Tracker.Services.expense;

import com.ExpenseEra.Smart_Tracker.dto.ExpenseDTO;
import com.ExpenseEra.Smart_Tracker.entity.Expense;
import com.ExpenseEra.Smart_Tracker.repository.ExpenseRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class ExpenseServiceImpI implements ExpenseService {


    private final ExpenseRepository expenseRepository;

    public Expense postExpense (ExpenseDTO expenseDTO){
        return saveOrUpdateExpanse(new Expense(),expenseDTO);
    }

    private Expense saveOrUpdateExpanse(Expense expense, ExpenseDTO expenseDTO){
        expense.setTitle(expenseDTO.getTitle());
        expense.setDate(expenseDTO.getDate());
        expense.setAmount(expenseDTO.getAmount());
        expense.setCategory(expenseDTO.getCategory());
        expense.setDescription(expenseDTO.getDescription());

        return expenseRepository.save(expense);
    }
public List<Expense> getAllExpense(){
        return expenseRepository.findAll().stream()
                .sorted(Comparator.comparing(Expense::getDate).reversed())
                .collect(Collectors.toList());

}
}
