package com.studentapp.studentwebapp.repository;

import com.studentapp.studentwebapp.model.Student;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface StudentRepository extends MongoRepository<Student, String> {
    List<Student> findByOrderByNameAsc();
}
