import React, { Component } from 'react';
import SideMenu from './menu-side';
import '../styles/content.css';

class Content extends Component {
    render() {
        return (
            <div id="content">
                <div className="row">
                    <div className="column">
                        <SideMenu id = {this.props.side_menu_id} top_menu_id = {this.props.top_menu_id}/>
                    </div>

                    <div className="column content">
                        This is content area.
                    </div>  
                </div>
            </div>
        );
    }
}

export default Content;