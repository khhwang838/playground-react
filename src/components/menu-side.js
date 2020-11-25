import React, { Component } from 'react';
import '../styles/menu.css';

class SideMenu extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    }
    render() {
        return (
            <nav id="sideMenu" className="menu">
                {this.getSideMenus(this.props.top_menu_id)}
            </nav>
        );
    }

    getSideMenus = (selected_top_menu) => {
        switch (selected_top_menu) {
            case 1:
                break;
            case 2:
                return (
                    <ul>
                        <li><a className="menuLink" href="#" onClick={() => this.props.handler('diary_life')}>다이어리</a></li>
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
}

// function listAllDiaryLife() {
//     $.ajax({
//         type: 'GET',
//         url: 'localhost:8080/diary/life',
//         success: function(response) {
//             this.setState({show: true, data: response})
//         }.bind(this)
//     });
// }
export default SideMenu;