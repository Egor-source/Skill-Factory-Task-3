import React from 'react';
import {Link} from "react-router-dom";

const BoardTask = ({id, title,status}) => {
    return (
        <Link className="task-wrapper" to={`/task/${status}/${id}`}>
            {title}
        </Link>
    );
};

export default BoardTask;