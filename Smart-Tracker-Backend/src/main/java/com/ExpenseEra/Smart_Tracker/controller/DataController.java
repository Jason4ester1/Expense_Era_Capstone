package com.example.smarttracker.controller;

import com.example.smarttracker.model.Data;
import com.example.smarttracker.service.DataService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/data")
public class DataController {

    @Autowired
    private DataService dataService;

    @GetMapping
    public List<Data> getAllData() {
        return dataService.getAllData();
    }

    @PostMapping
    public Data createData(@RequestBody Data data) {
        return dataService.createData(data);
    }
}