import React, { Component } from 'react';
import Posts from '../Blog/Posts/Posts';
import NewPost from './NewPost/NewPost';
import { Route , Link} from 'react-router-dom';

import './Blog.css';

// import axios from 'axios';
//import axiosInstance from '../../axios';

class Blog extends Component {

    render () {

        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to={{
                                pathname: '/new-post',
                                hash: '#submit',
                                // hash - will allow us to jump to any id sumbmit if we have any
                                search: '?quick-submit=true'
                            }}>New Post</Link></li>

                            {/* to can be javascript object  */}
                        </ul>
                    </nav>
                </header>

                <Route path="/" exact component={Posts} />
                <Route path="/new-post" component={NewPost} />

            </div>
        );
    }
}

export default Blog;

// Note -

// React router provides us the extra information about the loaded route through props
// console in didmount of Posts.js and in newpost.js