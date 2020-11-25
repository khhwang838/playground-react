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
            break;
        case 2:
            return (
                <ul>
                    <li><a className="menuLink" href="#">다이어리</a></li>
                    <li><a className="menuLink" href="#">개발일지</a></li>
                    <li><a className="menuLink" href="#">제품리뷰</a></li>
                    <li><a className="menuLink" href="#">여행정보</a></li>
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
        default:
            break;
    }
}
export default SideMenu;