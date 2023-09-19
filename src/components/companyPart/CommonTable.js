import React from 'react';
import Paper from "@mui/material/Paper";
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import H6 from "../Typography/H6";
import H7 from "../Typography/H7";
import TypoBadge from "../common/TypoBadge";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

const CommonTable = ({jobs, type = 1}) => {
    return (
        <TableContainer component={Paper}>
            <Table sx={{boxShadow: 'none'}}>
                <TableHead>
                    <TableRow>
                        <TableCell>
                            <H6
                                text='Job Title'
                                color='#6B6E6F'
                            />
                        </TableCell>
                        <TableCell>
                            <H6
                                text='Job Type'
                                color='#6B6E6F'
                            />
                        </TableCell>
                        <TableCell>
                            <H6
                                text='Location'
                                color='#6B6E6F'
                            />
                        </TableCell>
                        <TableCell>
                            <H6
                                text='Salary'
                                color='#6B6E6F'
                            />
                        </TableCell>
                        <TableCell>
                            <H6
                                text='Total Applicants'
                                color='#6B6E6F'
                            />
                        </TableCell>
                        <TableCell>
                            <H6
                                text='Action'
                                color='#6B6E6F'
                            />
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {jobs?.map((row, key) => (
                        <TableRow
                            key={key}
                            sx={{'&:last-child td, &:last-child th': {border: 0}}}
                        >
                            <TableCell>
                                <H7
                                    text={row.job_title}
                                    color='#F28A1F'
                                />
                            </TableCell>
                            <TableCell>
                                <TypoBadge
                                    icon={<BusinessCenterIcon fontSize='small'/>}
                                    text={row.job_type}
                                    color='#FF5656'
                                    bgColor='#fff6f6'
                                />
                            </TableCell>
                            <TableCell>
                                <TypoBadge
                                    icon={<LocationOnOutlinedIcon fontSize='small'/>}
                                    text={`${row.job_address}`}
                                    color='#0D9CA4'
                                    bgColor='#F3FAFA'
                                />
                            </TableCell>
                            <TableCell>
                                <TypoBadge
                                    icon={<LocationOnOutlinedIcon fontSize='small'/>}
                                    text={row.salary_range}
                                    color='#6b6e6f'
                                    bgColor='#f7f7f8'
                                />
                            </TableCell>
                            <TableCell>{row.no_of_vacancies}</TableCell>
                            <TableCell>
                                {type === 1 ? (
                                    <Box display='flex' flexWrap='wrap'>
                                        <Button className='primaryBtnLessPaddingBlue'>
                                            <BorderColorOutlinedIcon fontSize='14px'/>
                                            <H6
                                                text='Edit'
                                                color='#0D9CA4'
                                                ml={1}
                                            />
                                        </Button>
                                        <Button className='primaryBtnLessPadding' sx={{marginLeft: '7px'}}>
                                            <H6
                                                text='Applicants'
                                                color='white'
                                            />
                                        </Button>
                                    </Box>
                                ) : (
                                    <Box display='flex' flexWrap='wrap'>
                                        <Button className='primaryBtnLessPaddingRed'>
                                            <BorderColorOutlinedIcon fontSize='14px'/>
                                            <H6
                                                text='Delete'
                                                color='#FF5656'
                                                ml={1}
                                            />
                                        </Button>
                                        <Button className='primaryBtnLessPadding' sx={{marginLeft: '7px'}}>
                                            <H6
                                                text='Re-Post'
                                                color='white'
                                            />
                                        </Button>
                                    </Box>
                                )}

                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default CommonTable;