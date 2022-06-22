import React from 'react'
import Post from './Post'
import PostForm from './PostForm'
import { Col, Container, Row } from 'react-bootstrap'


const AllPosts = () => {

    const posts = [
        {"post_id":1,"title":"Beautiful Island!!","metaTitle":"island,relax,travel", "slug": "island-trip","published":0 ,"content": "family holiday", "user_id": 1
     }    ]
   


    
    let postList = null;
    postList = posts.map(post => 
        <div key={post.post_id}>
            <Post post = {post}/>
        </div>)

const addPost = (post)=>{
    posts.push(post);
    console.log(posts);
}


return (
<>
<h1>AllPosts: </h1>
        <Container>
            <Row>
            <Col>{postList}</Col>
            <Col><PostForm submitHandler = {addPost} /></Col>
            </Row>
        </Container>
</>
)

}

export default AllPosts

