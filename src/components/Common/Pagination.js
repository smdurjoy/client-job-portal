import React from 'react';
import '../../assets/css/pagination.css';
import {Link} from "react-router-dom";

const Pagination = () => {
    return (
        <div className="center">
            <div className="pagination pagination1 pagination4 pagination6">
                {/*<Link to="#">&laquo;</Link>*/}
                <Link to="#" className="active">1</Link>
                <Link to="#">2</Link>
                <Link to="#">&raquo;</Link>
            </div>
        </div>
    );
};

export default Pagination;