import React from 'react';
import Pagination from "@mui/material/Pagination";

const CommonPagination = ({maxItem}) => {
    return (
        <Pagination
            count={maxItem}
            shape="rounded"
            sx={{
                "& .MuiPaginationItem-root": {
                    backgroundColor: '#fafafa',
                    padding: '20px 18px'
                },
                "& .MuiPaginationItem-root.Mui-selected": {
                    backgroundColor: '#F28A1F',
                    color: '#fff'
                },
            }}
        />
    );
};

export default CommonPagination;