import React, { Component } from 'react';
import Posts from '../Blog/Posts/Posts';
import { Route } from 'react-router-dom';

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
                            <li><a href="/">Home</a></li>
                            <li><a href="/new-post">New Post</a></li>
                        </ul>
                    </nav>
                </header>
                
                {/* <Posts/> */}
                {/* <Route path="/" render={ () => <h1>Home</h1>}/> */}
                {/* react checks if the current path starts with the path string here '/' s it will display HOme in http://localhost:3000/new-post as well 
                so add boolean prop exact for exact math of path else it will see only for the prefix*/}
              
                {/* <Route path="/" exact render={ () => <h1>Home</h1>}/>
                <Route path="/"  render={ () => <h1>Home 2</h1>}/> */}

                <Route path="/" exact component={Posts} />
                {/* component needs to be a reference to the function or class we want to use 
                so here simply what we import */}
            </div>
        );
    }
}

export default Blog;