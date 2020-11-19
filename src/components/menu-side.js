import React, { Component } from 'react';
import '../styles/menu.css';

class SideMenu extends Component {
    render() {
        return (
            <nav id="sideMenu" className="menu">
                {getSideMenus(this.props.top_menu_id)}
            </nav>
        );
    }
}

function getSideMenus(selected_top_menu) {
    switch (selected_top_menu) {
        case 1:
            // nothing
            return (
                <ul>
                    <li><a className="menuLink" href="#">Hist</a></li>
                </ul>
            );
            break;
        case 2:
            return (
                <ul>
                    <li><a className="menuLink" href="#">Diary</a></li>
                    <li><a className="menuLink" href="#">Dev</a></li>
                    <li><a className="menuLink" href="#">Review</a></li>
                    <li><a className="menuLink" href="#">Travel</a></li>
                </ul>
            );
            break;
        case 3:
            return (
                <ul>
                    <li><a className="menuLink" href="#">부동산</a></li>
                    <li><a className="menuLink" href="#">주식</a></li>
                </ul>
            );
            break;
        case 4:
            return (
                <ul>
                    <li><a className="menuLink" href="#">부동산</a></li>
                    <li><a className="menuLink" href="#">주식</a></li>
                </ul>
            );
            break;
        default:
            break;
    }
}
export default SideMenu;