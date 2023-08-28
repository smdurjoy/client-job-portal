import React from 'react';
import Button from "@mui/material/Button";
import {Link} from "react-router-dom";

const SaveNCancel = () => {
    return (
        <>
            <Button size='large' className='primaryBtn'>
                Save
            </Button>
            <Button size='large' variant='outlined' className='secondaryBtnBlue' sx={{marginLeft: '1rem'}}>
                <Link to={'/'}>
                    Cancel
                </Link>
            </Button>
        </>
    );
};

export default SaveNCancel;