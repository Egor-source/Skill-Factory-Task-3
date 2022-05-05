import React, {useState} from 'react';
import {v4} from "uuid";

const Dropdown = ({className, title, children, ...args}) => {
    const [displayMenu, setDisplayMenu] = useState(false);
    const toggleMenuVisible = () => {
        setDisplayMenu(!displayMenu)
    }

    return (
        <div className={`dropdown ${displayMenu ? 'active' : ''} ${className || ''} `} {...args}>
            <div className="dropdown__toggle" onClick={toggleMenuVisible}>
                {title}
            </div>
            <div className="dropdown__menu">
                {children.map(child =>
                    <div className="dropdown__menu__item" key={v4()}>{child}</div>
                )}
            </div>
        </div>
    );
};

export default Dropdown;