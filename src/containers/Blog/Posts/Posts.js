import React, {Component} from 'react';
import axiosInstance from '../../../axios';
import Post from '../../../components/Post/Post';
import './Posts.css';
import { Link } from 'react-router-dom';


class Posts extends Component {
    state = {
        posts: [],
    }
      
    componentDidMount () {
        //console.log(this.props);
        axiosInstance.get('/posts')
        .then((response) => {
           console.log(response)
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
           // this.setState({error : true});
        }); 
    }



    postSelectedHandler = (id) => {
    //    this.props.history.push('/' + id)
     this.props.history.push({pathname : '/' + id});
    }

    render () {

        let posts = <p style={{textAlign : 'center'}}>Something went Wrong!!</p>
        if(!this.state.error){
            posts = this.state.posts.map(post => {
                return (
                // <Link
                // to={'/' + post.id}
                // key={post.id}>
                    <Post 
                        key={post.id} 
                        title={post.title} 
                        author={post.author}
                        postClicked={() => this.postSelectedHandler(post.id)}/>
                // </Link>
                );
            });
        }

        return (
            <section className="Posts">
                   {posts}
            </section>
        );
    }
}

export default Posts;