package com.studentapp.studentwebapp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.studentapp.studentwebapp.model.Student;
import com.studentapp.studentwebapp.repository.StudentRepository;

@RestController
@RequestMapping("/students")
public class StudentController {

    @Autowired
    private StudentRepository studentRepository;

    @GetMapping("/all")
    public List<Student> getAll() {
        List<Student> students = studentRepository.findAll();
        return students;
    }

    @PutMapping
    public void insert(@RequestBody Student student) {
        studentRepository.insert(student);
    }

    @PostMapping
    public void update(@RequestBody Student student) {
        studentRepository.save(student);
    }
}