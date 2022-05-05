import React, {useContext} from 'react';
import BoardStatus from "../components/UI/BoardStatus";
import BoardContext from "../context";
import {Col, Row} from "react-bootstrap";

const Board = () => {
    const {board} = useContext(BoardContext);
    return (
        <Row className="row-gap-20">
            {
                board.map(status =>
                    <Col sm="12" md="6" xl="3"  key={status.id}>
                        <BoardStatus id={status.id} tasks={status.tasks} canAddFrom={status.canAddFrom}/>
                    </Col>
                )
            }
        </Row>
    );
};

export default Board;