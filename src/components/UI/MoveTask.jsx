import React, {useContext, useState} from 'react';
import context from "../../context";

const MoveTask = ({id, taskList, setTasksList, setNextStepContent, possibleToAddTasks}) => {
    let {board, setBoard} = useContext(context);
    let [disableAddToCard, setDisableAddToCard] = useState(false);

    const showNextStep = () => {
        setDisableAddToCard(true);
        setNextStepContent(<select className="board-status__select" onChange={moveTask}>
            <option className="d-none">Select task</option>
            {
                Object.keys(possibleToAddTasks).map(key => {
                    if (key != 'length') {
                        return possibleToAddTasks[key].map(task => {
                            return <option key={task.id} value={JSON.stringify({
                                key,
                                taskId: task.id
                            })}>{task.title}</option>
                        })
                    }
                })
            }
        </select>)
    }

    const moveTask = (e) => {
        setTimeout(()=>{
            setDisableAddToCard(false);
            let {key, taskId} = JSON.parse(e.target.value);
            let newTasksList = [...taskList, possibleToAddTasks[key].find(item => item.id == taskId)]
            setTasksList(newTasksList);
            setBoard(board.map(item => {
                if (item.id == key) {
                    item.tasks = possibleToAddTasks[key].filter(item => item.id != taskId);
                }
                if (item.id == id) {
                    item.tasks = newTasksList;
                }
                return item;
            }))
        },100)

    }

    return (
        <>
            <button className="board-status__add-new-task" onClick={showNextStep}
                    disabled={!possibleToAddTasks.length > 0 || disableAddToCard}>+
                Add card
            </button>
        </>
    );
};

export default MoveTask;