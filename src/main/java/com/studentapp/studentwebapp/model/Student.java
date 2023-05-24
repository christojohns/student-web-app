package com.studentapp.studentwebapp.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.IndexDirection;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;

@Data
@Document(collection = "Students")
public class Student {

    @Id
    private String id;
    private String name;
    private String dob;
    private String classname;
    private String div;
    private String gender;
    @Indexed(direction = IndexDirection.ASCENDING)
    private String rollNumber;
}
