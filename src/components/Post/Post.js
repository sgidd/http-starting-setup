import React from 'react';

import './Post.css';
import { withRouter } from 'react-router-dom';
// to make any comp aware if the route can be wrapped it with withRouter
// the props can be passed to child comps of the routed comp ro to any route
//another way is to pass the props in comp
//in posts.js <post {...this.props}



const post = (props) => {
    console.log(props);
    return ( 
    <article className="Post" onClick={props.postClicked}>
        <h1>{props.title}</h1>
        <div className="Info">
            <div className="Author">{props.author}</div>
        </div>
    </article>)
}
   


export default withRouter(post);