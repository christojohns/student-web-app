package com.studentapp.studentwebapp.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;

@Data
@Document(collection = "Sequence")
public class Sequence {

    @Id
    private String id;

    private String type;

    private Integer sequenceId;

}
