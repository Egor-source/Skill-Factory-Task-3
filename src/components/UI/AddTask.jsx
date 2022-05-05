import React, {useContext, useState} from 'react';
import {v4} from "uuid";
import button from "bootstrap/js/src/button";
import Textarea from "./Textarea";
import context from "../../context";

const AddTask = ({id,tasksList, setTasksList, setNextStepContent}) => {
    let {board,setBoard} = useContext((context))
    let [newTaskTitle, setNewTaskTitle] = useState('');
    let [showAddNewItem, setShowAddNewItem] = useState(true);
    const showNextStep = () => {
        setShowAddNewItem(false);
        setNextStepContent(<Textarea className="board-status__textarea" rows="1" placeholder="New task title"
                                     onChange={e => setNewTaskTitle(e.target.value)}></Textarea>)
    }

    const addNewTask = () => {
        if (newTaskTitle.length == 0) {
            alert('Title cannot be empty')
            return
        }
        let newTasksList =[...tasksList, {
            id: v4(),
            title: newTaskTitle,
            description: ''
        }]
        setTasksList(newTasksList);
        setShowAddNewItem(true);
        setNewTaskTitle('');
        setBoard(board.map(item => {
            if (item.id == id) {
                item.tasks = newTasksList;
            }
            return item;
        }));
    }

    return (
        <>
            {
                showAddNewItem ?
                    <button className="board-status__add-new-task " onClick={showNextStep}>+ Add
                        card</button> :
                    <button className="board-status__submit-add-new-tasks"
                            onClick={addNewTask}>Submit</button>
            }
        </>
    );
};

export default AddTask;