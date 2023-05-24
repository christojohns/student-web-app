package com.studentapp.studentwebapp.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.studentapp.studentwebapp.model.Sequence;

public interface IdGeneratorRepository extends MongoRepository<Sequence, String> {

    Sequence findByType(String type);
}
