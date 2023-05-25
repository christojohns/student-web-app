
import React, { useState, useEffect } from 'react'

import StudentTable from './StudentTable';
import StudentForm from './StudentForm';

export default function Home() {
    const [students, setStudents] = useState([]);
    useEffect(() => {
        fetch("http://localhost:8080/students/all")
            .then((response) => response.json())        //api for the get request
            .then((data) => {
                console.log(data)
                setStudents(data.data)
            }
            )
    }, [])

    return (
        <>
            <StudentForm />
            <StudentTable
                students={students}
            />
        </>
    )
}
