import React from 'react';
import {Col, Row} from "react-bootstrap";
import userAvatar from "../../img/user-avatar.jpg";
import Dropdown from "./Dropdown";
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header className="header">
            <Row>
                <Col xs="6">
                    <Link to="/" className="text_white h1 ">Awesome Kanban Board</Link>
                </Col>
                <Col xs="6" className="text-end">
                    <Dropdown  title={<img className="user-avatar" src={userAvatar} alt="user-avatar"/>}>
                        <Link to="/">Profile</Link>
                        <Link to="/">Log out</Link>
                    </Dropdown>
                </Col>
            </Row>
        </header>
    );
};

export default Header;