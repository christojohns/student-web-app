
import React, { useState, useEffect } from 'react'
import axios from "axios";

import StudentTable from './StudentTable';
import StudentForm from './StudentForm';
import { Grid, AppBar, Typography } from '@mui/material';

export default function Home() {
    const [students, setStudents] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:8080/students/all")
            .then((response) => {
                setStudents(response.data)
            }
            )
    }, [])

    return (
        <>
            <AppBar position="static">
                <Typography align="center" variant="h5" component="div" sx={{ flexGrow: 1 }}>
                    Student APP
                </Typography>
            </AppBar>
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <StudentForm
                        students={students}
                        setStudents={setStudents}
                    />
                </Grid>
                <Grid item xs={8}>
                    <StudentTable
                        students={students}
                    />
                </Grid>
            </Grid>
        </>
    )
}
