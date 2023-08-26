import React from 'react';
import Box from "@mui/material/Box";
import {FormControl, InputAdornment, MenuItem, Select, TextField} from "@mui/material";
import ZoomOutOutlinedIcon from "@mui/icons-material/ZoomOutOutlined";
import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import Button from "@mui/material/Button";

const SearchBox = ({category, setCategory, location, setLocation}) => {
    return (
        <Box>
            <Box className='homeSearchBox' style={{ boxShadow: '5px 8px 20px 0px rgba(242, 138, 31, 0.20)' }} width='100%'>
                <TextField
                    hiddenLabel
                    id="filled-hidden-label-normal"
                    placeholder='Jobs Title'
                    sx={{
                        backgroundColor: 'white',
                        height: 'inherit',
                        "& fieldset": {
                            border: "none",
                        }
                    }}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <ZoomOutOutlinedIcon style={{color: '#F28A1F'}}/>
                            </InputAdornment>
                        ),
                    }}
                />
                <div style={{flexBasis: '25%'}}>
                    <FormControl>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            sx={{
                                "& fieldset": {
                                    border: "none",
                                },
                            }}
                            value={category}
                            displayEmpty
                            startAdornment={
                                <InputAdornment position="start">
                                    <CategoryOutlinedIcon style={{color: '#F28A1F'}}/>
                                </InputAdornment>
                            }
                            onChange={(e) => setCategory(e.target.value)}
                        >
                            <MenuItem disabled value="">
                                Category
                            </MenuItem>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <div style={{flexBasis: '25%'}}>
                    <FormControl>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            sx={{
                                "& fieldset": {
                                    border: "none",
                                },
                            }}
                            value={location}
                            displayEmpty
                            startAdornment={
                                <InputAdornment position="start">
                                    <LocationOnOutlinedIcon style={{color: '#F28A1F'}}/>
                                </InputAdornment>
                            }
                            onChange={(e) => setLocation(e.target.value)}
                        >
                            <MenuItem disabled value="">
                                Location
                            </MenuItem>
                            <MenuItem value={10}>USA</MenuItem>
                            <MenuItem value={20}>Canada</MenuItem>
                            <MenuItem value={30}>Australia</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <Button className='primaryBtn' sx={{display: {xs: 'none', sm: 'block'}, px:5 }}>
                    Search
                </Button>
            </Box>
            <Button
                className='primaryBtn'
                sx={{display: {xs: 'block', sm: 'none'}, mt: 1}}
            >
                Search
            </Button>

            <Box mt={4}>
                <p style={{color: '#6B6E6F'}}>
                    Search keywords e.g. Product Designer
                </p>
            </Box>
        </Box>
    );
};

export default SearchBox;