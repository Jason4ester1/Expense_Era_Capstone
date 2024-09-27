package com.ExpenseEra.Smart_Tracker.controller;


import com.ExpenseEra.Smart_Tracker.Services.expense.ExpenseService;
import com.ExpenseEra.Smart_Tracker.dto.ExpenseDTO;
import com.ExpenseEra.Smart_Tracker.entity.Expense;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping
@RequiredArgsConstructor
@CrossOrigin("*")
public class ExpenseController {


    private final ExpenseService expenseService;
@PostMapping
    public ResponseEntity<?> postExpense(@RequestBody ExpenseDTO dto){
        Expense createdExpanse = expenseService.postExpense(dto);
        if (createdExpanse != null){
            return ResponseEntity.status(HttpStatus.CREATED).body(createdExpanse);
        }else {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
    }
}
