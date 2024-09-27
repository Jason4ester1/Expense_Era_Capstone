package com.ExpenseEra.Smart_Tracker.Services.income;

import com.ExpenseEra.Smart_Tracker.dto.IncomeDTO;
import com.ExpenseEra.Smart_Tracker.entity.Income;

import java.util.List;

public interface IncomeService {

    Income postIncome(IncomeDTO incomeDTO);

    List<IncomeDTO> getAllIncomes();
}