import React, { Component } from 'react';
import '../styles/menu.css';

class TopMenu extends Component {
    changeMenu = (e) => {
        this.props.changeMenuHandler('top_menu', Number(e.target.attributes.menu_no.value));
    };
    render() {
        return (
            <nav id="topMenu" className="menu">
                <ul>
                    <li><a className="menuLink" href="#" menu_no="1" onClick={this.changeMenu}>
                        Intro</a></li>

                    <li><a className="menuLink" href="#" menu_no="2" onClick={this.changeMenu}>
                        Blog</a></li>

                    <li><a className="menuLink" href="#" menu_no="3" onClick={this.changeMenu}>
                        Stats</a></li>
                </ul>
            </nav>
        );
    }
}

export default TopMenu;