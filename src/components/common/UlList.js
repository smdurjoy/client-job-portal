import React from 'react';
import Typography from "@mui/material/Typography";

const UlList = ({items}) => {
    return (
        <Typography
            component="div"
            fontSize={{
                lg: 18,
                md: 16,
                sm: 14,
                xs: 12
            }}
        >
            <ul>
                {
                    items?.map((item, key) => (
                        <li key={key}>{item}</li>
                    ))
                }
            </ul>
        </Typography>
    );
};

export default UlList;