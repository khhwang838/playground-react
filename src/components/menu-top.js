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
                        About</a></li>

                    <li><a className="menuLink" href="#" menu_no="2" onClick={this.changeMenu}>
                        Blog</a></li>

                    <li><a className="menuLink" href="#" menu_no="3" onClick={this.changeMenu}>
                        News</a></li>

                    <li><a className="menuLink" href="#" menu_no="4" onClick={this.changeMenu}>
                        Statictics</a></li>
                </ul>
            </nav>
        );
    }
}

export default TopMenu;