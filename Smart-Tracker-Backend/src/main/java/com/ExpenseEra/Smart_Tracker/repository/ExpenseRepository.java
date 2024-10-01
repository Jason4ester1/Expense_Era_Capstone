package com.ExpenseEra.Smart_Tracker.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ExpenseEra.Smart_Tracker.model.Expense;

@Repository
public interface ExpenseRepository extends JpaRepository<Expense , Long> {

}
