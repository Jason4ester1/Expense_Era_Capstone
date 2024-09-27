package com.ExpenseEra.Smart_Tracker.repository;

import com.ExpenseEra.Smart_Tracker.entity.Income;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IncomeRepository extends JpaRepository<Income, Long> {
}
