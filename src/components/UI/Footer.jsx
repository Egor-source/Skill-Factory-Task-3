import React, {useContext, useEffect, useState} from 'react';
import {Col, Row} from "react-bootstrap";
import context from "../../context";

const Footer = () => {
    let {board} = useContext(context);
    let [activeTasksCount, setActiveTasksCount] = useState(0);
    let [finishedTasksCount, setFinishedTasksCount] = useState(0);

    useEffect(() => {
        setActiveTasksCount(board.find(item => item.id == 'Backlog').tasks.length);
        setFinishedTasksCount(board.find(item => item.id == 'Finished').tasks.length);
    }, [board])

    return (
        <footer className="footer">
            <Row className="row-gap-15">
                <Col md="6">
                    <div className="d-flex gap-40 gap-sm-25">
                        <p className="text_white">Active tasks: {activeTasksCount}</p>
                        <p className="text_white">Finished tasks: {finishedTasksCount}</p>
                    </div>
                </Col>
                <Col md="6" className="text-md-end">
                    <p className="text_white">Kanban board by Krotov Egor, 2022</p>
                </Col>
            </Row>
        </footer>
    );
};

export default Footer;