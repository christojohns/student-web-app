package com.studentapp.studentwebapp.services;

import com.studentapp.studentwebapp.model.Sequence;
import com.studentapp.studentwebapp.model.Student;
import com.studentapp.studentwebapp.repository.IdGeneratorRepository;
import com.studentapp.studentwebapp.repository.StudentRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.DecimalFormat;
import java.util.List;

@Service
public class StudentServiceImpl implements StudentService {

    @Autowired
    private StudentRepository studentRepository;

    @Autowired
    private IdGeneratorRepository idGeneratorRepository;

    @Override
    public List<Student> getAllStudents() {
        return studentRepository.findAll();
    }

    @Override
    public Student createStudent(Student student) {
        student.setRollNumber(generateSequenceNumber());
        return studentRepository.save(student);
    }

    /**
     * This method generating new Roll number from seqeunce
     * 
     * @return
     */
    private String generateSequenceNumber() {
        try {
            Sequence currentSequenceNumber = idGeneratorRepository.findByType("RollNo");
            Integer sequenceNumber = currentSequenceNumber.getSequenceId();
            Integer newSequenceNumber = sequenceNumber + 1;
            currentSequenceNumber.setSequenceId(newSequenceNumber);
            idGeneratorRepository.save(currentSequenceNumber);
            DecimalFormat decimalFormat = new DecimalFormat("000");
            return ("R-" + decimalFormat.format(newSequenceNumber));
        } catch (Exception e) {
            throw new NullPointerException("Sequnce Data is not availale");
        }
    }

}