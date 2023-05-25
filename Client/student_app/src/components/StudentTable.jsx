import React, { useState, useEffect } from 'react'
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    TablePagination,
    Typography
} from '@mui/material';

export default function StudentTable(props) {
    const { students } = props;

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    return (
        <>
            <Typography align="center" variant="h5" component="div" sx={{ flexGrow: 1, p: 1 }}>
                Student Table
            </Typography>
            <TableContainer component={Paper} sx={{ bgcolor: '#cfe8fc', maxWidth: 'md' }}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="right">DOB</TableCell>
                            <TableCell align="right">Class</TableCell>
                            <TableCell align="right">Division</TableCell>
                            <TableCell align="right">Roll No</TableCell>
                            <TableCell align="right">Gender</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {Array.isArray(students) &&
                            students.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((student) => (
                                    <TableRow
                                        key={student.rollNumber}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">
                                            {student.name}
                                        </TableCell>
                                        <TableCell align="right">{student.dob}</TableCell>
                                        <TableCell align="right">{student.classname}</TableCell>
                                        <TableCell align="right">{student.div}</TableCell>
                                        <TableCell align="right">{student.rollNumber}</TableCell>
                                        <TableCell align="right">{student.gender}</TableCell>
                                    </TableRow>
                                ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={students.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </>
    )

}