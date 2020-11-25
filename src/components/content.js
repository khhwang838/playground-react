import React, { Component } from 'react';
import SideMenu from './menu-side';
import '../styles/content.css';

class Content extends Component {
    render() {
        let topMenuId = this.props.top_menu_id;
        if (topMenuId == 1) {
            // 사이드 메뉴가 없는 상위 메뉴
            return (
                <div id="content">
                    <div className="row">
                        <div className="column content no-float">
                            This is content area.
                            <p></p>
                            <img src="https://media.wired.com/photos/5ca648a330f00e47fd82ae77/master/w_2560%2Cc_limit/Culture_Matrix_Code_corridor.jpg"
                            style={{width: 50 + '%'}}>
                            </img>
                        </div>
                    </div>
                </div>
            );
        } else {
            return (
                <div id="content">
                    <div className="row">
                        <div className="column">
                            <SideMenu id={this.props.side_menu_id} top_menu_id={this.props.top_menu_id} />
                        </div>

                        <div className="column content">
                            This is content area.
                        <p></p>
                            <img src="https://media.wired.com/photos/5ca648a330f00e47fd82ae77/master/w_2560%2Cc_limit/Culture_Matrix_Code_corridor.jpg"
                            style={{width: 50 + '%'}}>
                            </img>
                        </div>
                    </div>
                </div>
            );
        }
    }
}

export default Content;