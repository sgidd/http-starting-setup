import React, { Component } from 'react';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

import axios from 'axios';

class Blog extends Component {
    state = {
        posts: [],
        selectedPostId:null,
        error: false
    }

    componentDidMount () {
        //axios.get('https://jsonplaceholder.typicode.com/posts') 
        //above statement returns the post but trying to save them in a const doesnt work
        // const posts = axios.get('https://jsonplaceholder.typicode.com/posts')  -- wrong
        //bcoz the axios get is asynchronous and javascript executes synchronously so it does not wait till the response received
        // so axios uses the promises (a default js object instrouced in ES6)
        // get method returns the promise , on promise resolved we will stroe it in state / prop
        
        // then is method which takes function as the input and executes it once the promise get resolved

        //axios.get('https://jsonplaceholder.typicode.com/postss')
        // after seeting global axios config base url
        axios.get('/posts')
        .then((response) => {
            // this.setState({posts: response.data});
            // console.log(response);

            //194. Transforming Data
            const posts = response.data.splice(0,4);
            const updatedPosts = posts.map((post)=> {
                return {
                    ...post,
                    author: 'Sunil'
                }
            });
            
            this.setState({posts: updatedPosts});
        })
        .catch(error => {
            console.log(error);
            this.setState({error : true});
        }); 
    }

    postSelectedHandler = (id) => {
        this.setState({selectedPostId : id});
    }

    render () {
       let posts = <p style={{textAlign : 'center'}}>Something went Wrong!!</p>
            if(!this.state.error){
                posts = this.state.posts.map(post => {
                    return <Post 
                    key={post.id} 
                    title={post.title} 
                    author={post.author}
                    postClicked={() => this.postSelectedHandler(post.id)}/>;
                });
            }

        return (
            <div>
                <section className="Posts">
                   {posts}
                </section>
                <section>
                    <FullPost id={this.state.selectedPostId}/>
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;