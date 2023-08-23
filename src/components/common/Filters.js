import React from 'react';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {Autocomplete, Checkbox, FormControlLabel, FormGroup, TextField} from "@mui/material";

const countries = [
    {label: 'USA', value: 1},
    {label: 'Canada', value: 2},
    {label: 'UK', value: 3},
];
const states = [
    {label: 'ABC', value: 1},
    {label: 'DEF', value: 2}
];
const cities = [
    {label: 'ABC', value: 1},
    {label: 'DEF', value: 2},
];

const Filters = () => {
    return (
        <Box bgcolor="#fafafa" p={3}>
            <Typography
                variant='h5'
                fontWeight='bold'
                fontSize={{
                    lg: 24,
                    md: 20,
                    sm: 18,
                    xs: 16
                }}
            >
                Filter
            </Typography>
            <hr color="#D4D4D4"/>

            <Box mt={2}>
                <Typography
                    variant='h5'
                    fontWeight='bold'
                    fontSize={{
                        lg: 24,
                        md: 20,
                        sm: 18,
                        xs: 16
                    }}
                    color='#6B6E6F'
                >
                    Job Type
                </Typography>

                <Box mt={2}>
                    <FormGroup>
                        <FormControlLabel control={<Checkbox defaultChecked/>} label="Full Time (10)"/>
                        <FormControlLabel control={<Checkbox/>} label="Part Time (10)"/>
                        <FormControlLabel control={<Checkbox/>} label="Remote (10)"/>
                        <FormControlLabel control={<Checkbox/>} label="Contract (10)"/>
                    </FormGroup>
                </Box>
            </Box>

            <Box mt={2}>
                <Typography
                    variant='h5'
                    fontWeight='bold'
                    fontSize={{
                        lg: 24,
                        md: 20,
                        sm: 18,
                        xs: 16
                    }}
                    color='#6B6E6F'
                >
                    Location
                </Typography>

                <Box mt={2}>
                    <Autocomplete
                        options={countries}
                        renderInput={(params) => <TextField {...params} label="Select Countries"/>}
                    />
                </Box>
                <Box mt={2}>
                    <Autocomplete
                        mt={2}
                        options={states}
                        renderInput={(params) => <TextField {...params} label="Select States"/>}
                    />
                </Box>
                <Box mt={2}>
                    <Autocomplete
                        mt={2}
                        options={cities}
                        renderInput={(params) => <TextField {...params} label="Select Cities"/>}
                    />
                </Box>
            </Box>

            <Box mt={2}>
                <Typography
                    variant='h5'
                    fontWeight='bold'
                    fontSize={{
                        lg: 24,
                        md: 20,
                        sm: 18,
                        xs: 16
                    }}
                    color='#6B6E6F'
                >
                    Salary Range
                </Typography>

                <Box mt={2}>
                    <FormGroup>
                        <FormControlLabel control={<Checkbox defaultChecked/>} label="$700 - $1000 (10)"/>
                        <FormControlLabel control={<Checkbox/>} label="$100 - $1500 (10)"/>
                        <FormControlLabel control={<Checkbox/>} label="$1500 - $2000 (10)"/>
                        <FormControlLabel control={<Checkbox/>} label="$3000 or above (10)"/>
                    </FormGroup>
                </Box>
            </Box>

            <Box mt={2}>
                <Typography
                    variant='h5'
                    fontWeight='bold'
                    fontSize={{
                        lg: 24,
                        md: 20,
                        sm: 18,
                        xs: 16
                    }}
                    color='#6B6E6F'
                >
                    Job Experience
                </Typography>

                <Box mt={2}>
                    <FormGroup>
                        <FormControlLabel control={<Checkbox defaultChecked/>} label="1 - 2 Years(23)"/>
                        <FormControlLabel control={<Checkbox/>} label="10+ Years(11)"/>
                        <FormControlLabel control={<Checkbox/>} label="3 - 5 Years(27)"/>
                        <FormControlLabel control={<Checkbox/>} label="6 - 9 Years(9)"/>
                    </FormGroup>
                </Box>
            </Box>
        </Box>
    );
};

export default Filters;