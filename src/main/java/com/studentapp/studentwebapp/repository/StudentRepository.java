package com.studentapp.studentwebapp.repository;
import com.studentapp.studentwebapp.model.Student;

import org.springframework.data.mongodb.repository.MongoRepository;
import java.util.List;

public interface StudentRepository extends MongoRepository<Student,String>{

    List<Student> findAll();

    Student save(Student student);

    Student insert(Student student);
    
}
