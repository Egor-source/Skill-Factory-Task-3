import React from 'react';
import {Col, Row} from "react-bootstrap";
import userAvatar from "../../img/user-avatar.jpg";
import Dropdown from "./Dropdown";

const Header = () => {
    return (
        <header className="header">
            <Row>
                <Col xs="6">
                    <h1 className="text_white">Awesome Kanban Board</h1>
                </Col>
                <Col xs="6" className="text-end">
                    <Dropdown  title={<img className="user-avatar" src={userAvatar} alt="user-avatar"/>}>
                        <p>Profile</p>
                        <p>Log out</p>
                    </Dropdown>
                </Col>
            </Row>
        </header>
    );
};

export default Header;