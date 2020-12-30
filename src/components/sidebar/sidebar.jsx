import React from 'react';

import { ReactComponent as LogoMenu } from '../../assets/icons/menu11.svg';
import './sidebar.scss';


const Sidebar = () => {
    return (
        <div className="sidebar">
            <button className="sidebar__btn">
                <LogoMenu className="sidebar__icon"/>
            </button>
        </div>
    );
}


export default Sidebar;