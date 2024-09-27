package com.ExpenseEra.Smart_Tracker.Services.income;


import com.ExpenseEra.Smart_Tracker.dto.IncomeDTO;
import com.ExpenseEra.Smart_Tracker.entity.Income;
import com.ExpenseEra.Smart_Tracker.repository.IncomeRepository;
import jakarta.persistence.criteria.CriteriaBuilder;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class IncomeServiceImpl implements IncomeService {

    private final IncomeRepository incomeRepository;

    public Income postIncome(IncomeDTO incomeDTO){
        return saveOrUpdateIncome(new Income(), incomeDTO);
    }


    private Income saveOrUpdateIncome(Income income, IncomeDTO incomeDTO){
        income.setTitle(incomeDTO.getTitle());
        income.setDate(incomeDTO.getDate());
        income.setAmount(incomeDTO.getAmount());
        income.setCategory(incomeDTO.getCategory());
        income.setCategory(incomeDTO.getDescription());

        return incomeRepository.save(income);
    }


    public List<IncomeDTO> getAllIncomes(){
        return incomeRepository.findAll().stream()
                .sorted(Comparator.comparing(Income::getDate).reversed())
                .map(Income::getIncomeDTO)
                .collect(Collectors.toList());

    }
}
