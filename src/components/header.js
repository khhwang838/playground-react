import React, { Component } from 'react';
import '../styles/header.css';

class Header extends Component {
    constructor(props) {
        super(props);
    };
    render() {
        return (
            <header>
                <div id="blog-intro">
                    <b>Efficient, Rapid, Accurate</b>
                </div>
                <div id="blog-name"><b>깐깐한 개발자의 블로그</b></div>
            </header>
        );
    }
}

export default Header;