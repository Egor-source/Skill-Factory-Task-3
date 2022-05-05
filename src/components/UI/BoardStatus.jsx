import React, {useContext, useEffect, useRef, useState} from 'react';
import BoardTask from "./BoardTask";
import AddTask from "./AddTask";
import MoveTask from "./MoveTask";
import context from "../../context";

const BoardStatus = ({id, canAddFrom, tasks}) => {

    let {board, setBoard} = useContext(context);
    let [tasksList, setTasksList] = useState(tasks);
    let [nextStepContent, setNextStepContent] = useState(null)
    let tasksWrapper = useRef(null);

    const getPossibleToAddTasks = () => {
        if (!!canAddFrom) {
            canAddFrom = new Set(canAddFrom);
            return board.reduce((acc, item) => {
                if (canAddFrom.has(item.id)) {
                    acc[item.id] = item.tasks;
                    acc.length += item.tasks.length
                }
                return acc
            }, {length: 0})
        }
    }

    let [possibleToAddTasks, setPossibleToAddTasks] = useState(getPossibleToAddTasks())

    useEffect(() => {
        setNextStepContent(null);
        tasksWrapper.current.scrollTop = tasksWrapper.current.scrollHeight;
    }, [tasksList])

    useEffect(() => {
        setPossibleToAddTasks(getPossibleToAddTasks());
        setTasksList(board.find(item => item.id == id).tasks);
    }, [board])

    return (
        <div className="board-status">
            <p className="m-b-20">{id}</p>
            <div className="board-status__tasks" ref={tasksWrapper}>
                {tasksList.map(task =>
                    <BoardTask key={task.id} id={task.id} title={task.title} status={id}/>
                )}
                {!!nextStepContent && <div className="next-step-wrapper">{nextStepContent}</div>}
            </div>
            {canAddFrom == null ?
                <AddTask id={id} tasksList={tasksList} setTasksList={setTasksList}
                         setNextStepContent={setNextStepContent}/> :
                <MoveTask id={id} taskList={tasksList} setTasksList={setTasksList}
                          setNextStepContent={setNextStepContent} possibleToAddTasks={possibleToAddTasks}
                />}
        </div>
    );
};

export default BoardStatus;