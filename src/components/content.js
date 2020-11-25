import React, { Component } from 'react';
import SideMenu from './menu-side';
import '../styles/content.css';

class Content extends Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: true,
            contents: []
        }
    }

    queryDiaryLife = () => {
        this.setState({ isLoaded: false });

        fetch("http://localhost:8080/diary/life")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        contents: result.data
                    });
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }
    handler = (queryType) => {
        let queried_contents = [];
        if (queryType === 'diary_life') {
            queried_contents = this.queryDiaryLife();
        }
        this.setState({
            isLoaded: true,
            contents: queried_contents
        })
    }

    render() {
        const { error, isLoaded, items } = this.state;

        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            let topMenuId = this.props.top_menu_id;
            if (topMenuId == 1) {
                // 사이드 메뉴가 없는 상위 메뉴
                return (
                    <div id="content">
                        <div className="row">
                            <div id="content" className="column no-float">
                                This is content area.
                                <p></p>
                                <img src="https://media.wired.com/photos/5ca648a330f00e47fd82ae77/master/w_2560%2Cc_limit/Culture_Matrix_Code_corridor.jpg"
                                    style={{ width: 50 + '%' }}>
                                </img>
                            </div>
                        </div>
                    </div>
                );
            } else {
                return (
                    <div id="area-content">
                        <div className="row">
                            <div className="column">
                                <SideMenu id={this.props.side_menu_id} top_menu_id={this.props.top_menu_id} handler={this.handler} />
                            </div>

                            <div id="content" className="column">
                                {this.displayHeader()}
                                {this.displayContents()}
                            </div>
                        </div>
                    </div>
                );
            }
        }
    }
    displayHeader = () => {
        return (
            <div class="buttons">
                <input id="search-box" type="text" placeholder="검색어를 입력해주세요"></input>
                <button onClick={this.searchDiaryLifePosts}>검색</button>
                <button onClick={this.createDiaryLifePost}>등록</button>
            </div>
        );
    }
    displayContents = () => {
        let posts = this.state.contents;
        const defaultStyle = {
            display: "flex",
            "align-items": "center",
            "justify-content": "center"
        }
        if (!this.state.isLoaded) {
            return (<div style={defaultStyle}>Loading...</div>);
        } else if (!posts || posts.length === 0) {
            return (<div style={defaultStyle}>No contents to display.</div>);
        } else {
            return (
                <ul>
                    {posts.map(post => (
                        <li key={post._id}>
                            {post.title} {post.content}
                        </li>
                    ))}
                </ul>
            );
        }
    };
}


export default Content;