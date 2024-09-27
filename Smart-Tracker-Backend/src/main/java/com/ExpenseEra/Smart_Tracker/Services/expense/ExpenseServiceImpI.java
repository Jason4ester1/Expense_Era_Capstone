package com.ExpenseEra.Smart_Tracker.Services.expense;

import com.ExpenseEra.Smart_Tracker.dto.ExpenseDTO;
import com.ExpenseEra.Smart_Tracker.entity.Expense;
import com.ExpenseEra.Smart_Tracker.repository.ExpenseRepository;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Comparator;
import java.util.List;
import java.util.Optional;
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

    public Expense updateExpanse(Long id, ExpenseDTO expenseDTO){
        Optional<Expense>optionalExpense = expenseRepository.findById(id);
        if(optionalExpense.isPresent()){
            return saveOrUpdateExpanse(optionalExpense.get(), expenseDTO);
        }else {
            throw new EntityNotFoundException("Expense is not present with id" + id);
        }
    }
public List<Expense> getAllExpense() {
    return expenseRepository.findAll().stream()
            .sorted(Comparator.comparing(Expense::getDate).reversed())
            .collect(Collectors.toList());

}
public Expense getExpenseById(Long id ){
        Optional<Expense> optionalExpense = expenseRepository.findById(id);
        if(optionalExpense.isPresent()) {
            return optionalExpense.get();
        }else {
            throw new EntityNotFoundException("Expense is not present with id" + id);
        }
}


public void deleteExpense(Long id){
        Optional<Expense>optionalExpense = expenseRepository.findById(id);
        if (optionalExpense.isPresent()){
            expenseRepository.deleteById(id);
        }else {
            throw new EntityNotFoundException("Expense is not present with id" + id);
        }
}
}
