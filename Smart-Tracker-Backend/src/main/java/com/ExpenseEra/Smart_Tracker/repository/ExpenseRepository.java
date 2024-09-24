package com.ExpenseEra.Smart_Tracker.repository;


import com.ExpenseEra.Smart_Tracker.entity.Expense;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ExpenseRepository extends JpaRepository<Expense , Long> {

}
