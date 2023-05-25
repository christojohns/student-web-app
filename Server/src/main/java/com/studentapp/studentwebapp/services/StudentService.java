package com.studentapp.studentwebapp.services;

import com.studentapp.studentwebapp.model.Student;

import java.util.List;

public interface StudentService {

    List<Student> getAllStudents();

    Student createStudent(Student student);
}