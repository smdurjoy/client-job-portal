import React from 'react';
import Typography from "@mui/material/Typography";

const UlList = ({items, objKey}) => {
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
                    items?.map((item, idx) => (
                        <li key={idx}>{item[objKey]}</li>
                    ))
                }
            </ul>
        </Typography>
    );
};

export default UlList;