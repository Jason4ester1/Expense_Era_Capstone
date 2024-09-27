package com.ExpenseEra.Smart_Tracker.Services.data;

import com.example.smarttracker.model.Data;
import com.example.smarttracker.repository.DataRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DataServices {

    @Autowired
    private DataRepository dataRepository;

    public List<Data> getAllData() {
        return DataRepository.findAll();
    }

    public Data createData(Data data) {
        return dataRepository.save(data);
