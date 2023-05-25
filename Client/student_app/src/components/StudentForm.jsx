import React, { useState } from 'react'

import axios from "axios";
import {
    RadioGroup,
    Input,
    Container,
    Typography,
    Paper,
    InputLabel,
    Button,
    Select,
    MenuItem,
    FormControlLabel,
    Radio
} from '@mui/material';

export default function StudentForm(props) {

    const { students, setStudents } = props;
    const [studentForm, setStudentForm] = useState({});

    const handleInputChange = (event) => {
        setStudentForm({
            ...studentForm,
            [event.target.name]: event.target.value,
        });
    };

    const divisionOptions = ["A", "B", "C"];
    const classOptions = [
        { key: "I", value: "1" },
        { key: "II", value: "2" },
        { key: "III", value: "3" },
        { key: "IV", value: "4" },
        { key: "V", value: "5" },
        { key: "VI", value: "6" },
        { key: "VII", value: "7" },
        { key: "VIII", value: "8" },
        { key: "IX", value: "9" },
        { key: "X", value: "10" },
        { key: "XI", value: "11" },
        { key: "XII", value: "12" },
    ];

    // Function to handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Frontend validation
        const { name, dob, classname, gender } = studentForm;
        const nameRegex = /^[a-zA-Z\s]*$/;
        if (!nameRegex.test(name)) {
            alert("Enter a valid name");
            return;
        }
        if (!name || !dob || !classname || !gender) {
            alert("All fields are required");
            return;
        }
        const response = await axios.post("http://localhost:8080/students/add", studentForm);
        if (response && response.data) {
            setStudents([...students, response.data]);
        }
    };

    return (
        <>
            <Typography align="center" variant="h5" component="div" sx={{ flexGrow: 1, p: 1 }}>
                Student Table
            </Typography>
            {/* <FormControl> */}
            <Container component={Paper} sx={{ p: 3, maxWidth: 'md' }}>
                <form onSubmit={handleSubmit}>
                    <InputLabel htmlFor="name">Name:</InputLabel>
                    <Input
                        sx={{ p: 2 }}
                        variant="outlined"
                        fullWidth={true}
                        type="text"
                        id="name"
                        name="name"
                        onChange={handleInputChange}
                    />
                    <br />
                    <InputLabel htmlFor="dob">Date of Birth:</InputLabel>
                    <Input
                        sx={{ p: 2 }}
                        fullWidth={true}
                        name="dob"
                        type="date"
                        id="dob"
                        onChange={handleInputChange}
                    />
                    <br />
                    <InputLabel htmlFor="class-selector">Class:</InputLabel>
                    <Select
                        fullWidth={true}
                        name="classname"
                        id="classname"
                        onChange={handleInputChange}
                        labelId="class-selector"
                        label="Class"
                        defaultValue=""
                    >
                        {classOptions.map((item) => (
                            <MenuItem key={item.value} value={item.value}>{item.key}</MenuItem>
                        ))}
                    </Select>
                    <InputLabel htmlFor="divison-selector">Division:</InputLabel>
                    <Select
                        fullWidth={true}
                        name="div"
                        id="division"
                        onChange={handleInputChange}
                        labelId="divison-selector"
                        label="Class"
                        defaultValue=""
                    >
                        {divisionOptions.map((item) => (
                            <MenuItem key={item} value={item}>{item}</MenuItem>
                        ))}
                    </Select>
                    <InputLabel id="gender-label">Gender</InputLabel>
                    <RadioGroup
                        aria-labelledby="gender-label"
                        name="gender"
                        onChange={handleInputChange}
                    >
                        <FormControlLabel value="female" control={<Radio />} label="Female" />
                        <FormControlLabel value="male" control={<Radio />} label="Male" />
                    </RadioGroup>
                    <Button type="submit" variant="contained">Submit</Button>
                </form>
            </Container>
        </>
    )
}
