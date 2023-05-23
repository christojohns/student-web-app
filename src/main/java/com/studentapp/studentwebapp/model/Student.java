package com.studentapp.studentwebapp.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.IndexDirection;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

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
    private int rollNumber;
//    private Address address;

    protected Student() {}

    public Student(String name, int rollNumber,String dob,String classname, String div, String gender) {
        this.name = name;
        this.rollNumber = rollNumber;
        this.dob = dob;
        this.classname = classname;
        this.div=div;
        this.gender = gender;
//        this.address = address;
    }

    public String getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public int getRollNumber() {
        return rollNumber;
    }
    
    public String getDob() {
        return dob;
    }
    
    public String getClassname() {
        return classname;
    }
    
    public String getDiv() {
        return div;
    }
    
    public String getGender() {
        return gender;
    }

//    public Address getAddress() {
//        return address;
//    }
}
