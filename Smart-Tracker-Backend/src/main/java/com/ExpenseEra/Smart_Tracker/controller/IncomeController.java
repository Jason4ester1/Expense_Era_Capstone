package com.ExpenseEra.Smart_Tracker.controller;


import com.ExpenseEra.Smart_Tracker.Services.income.IncomeService;
import com.ExpenseEra.Smart_Tracker.dto.IncomeDTO;
import com.ExpenseEra.Smart_Tracker.entity.Income;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/income")
@RequiredArgsConstructor
@CrossOrigin("*")
public class IncomeController {

    private final IncomeService incomeService;
@PostMapping
    public ResponseEntity<?> postIncome(@RequestBody IncomeDTO incomeDTO){
        Income createdIncome = incomeService.postIncome(incomeDTO);
        if(createdIncome != null) {
            return ResponseEntity.status(HttpStatus.CREATED).body(createdIncome);
        }else {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
    }

    @GetMapping("/all")
    public ResponseEntity<?> getAllIncomes(){
  
    return ResponseEntity.ok(incomeService.getAllIncomes());
    }

    
}
