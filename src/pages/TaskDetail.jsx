import React, {useContext, useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import context from "../context";
import Textarea from "../components/UI/Textarea";

const TaskDetail = () => {
    const {status, id} = useParams();
    const {board, setBoard} = useContext(context);
    let curStatus = board.find(item => item.id == status);
    let index;
    const task = curStatus.tasks.filter((item, i) => {
        if (item.id == id) {
            index = i;
            return item
        }
    })[0]

    const saveDescription = (e) => {
        task.description = e.target.value;
        curStatus.tasks[index] = task;
        setBoard(board.map(item => {
            if (item.id == status) {
                item = curStatus;
            }
            return item;
        }))
    }

    return (
        <div className="task-detail">
            <div className="d-flex justify-content-between align-items-start gap-20 m-b-35">
                <h2>{task.title}</h2>
                <Link className="task-detail__close" to="/"></Link>
            </div>
            <Textarea placeholder="This task has no description" onBlur={saveDescription}>{task.description}</Textarea>
        </div>
    );
};

export default TaskDetail;