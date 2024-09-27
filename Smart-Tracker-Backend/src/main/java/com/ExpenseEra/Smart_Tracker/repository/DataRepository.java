package com.ExpenseEra.Smart_Tracker.repository;

import com.ExpenseEra.Smart_Tracker.model.Data;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DataRepository extends JpaRepository<Data, Long> {
}