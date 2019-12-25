import React, {Component} from 'react';
import axiosInstance from '../../../axios';
import Post from '../../../components/Post/Post';
import './Posts.css';
import { Link , Route} from 'react-router-dom';
import FullPost from '../FullPost/FullPost';


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
    //    this.props.history.push('/posts/' + id)
     this.props.history.push({pathname : '/posts/' + id});
    }

    render () {

        let posts = <p style={{textAlign : 'center'}}>Something went Wrong!!</p>
        if(!this.state.error){
            posts = this.state.posts.map(post => {
                return (
                // <Link
                // to={'/posts/' + post.id}
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
            <div>
                <section className="Posts">
                   {posts}
                </section>
                {/* <Route path="/posts/:id" exact component={FullPost} /> */}
                <Route path={this.props.match.url + '/:id'} exact component={FullPost} />
            </div>
        );
    }
}

export default Posts;