import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap';

const PostForm = (props) => {
    const [postTitle, setPostTitle] = useState('');
    const [postId, setPostId] = useState('');
    const [summary, setSummary]= useState('');

    const addPost = (e) =>{
        e.preventDefault();
        let post = {
            "post_id" : 1,
            "post_title" : postTitle,
            "summary": summary
        
            // "user_id" : user_id
        }
        console.log(post);
        props.submitHandler(post);
    }

  return (
    <Form onSubmit={addPost}>
    <Form.Group className="mb-3" controlId="formTitle">
      <Form.Label>Post Title</Form.Label>
      <Form.Control type="text" placeholder="Enter title" value={postTitle}
       onChange ={event=>setPostTitle(event.target.value)} />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formSummary">
      <Form.Label>Summary</Form.Label>
      <Form.Control type="text" placeholder="Enter summary" value={summary}
      onChange ={event=>setSummary(event.target.value)}/>
    </Form.Group>
    <Button variant="primary" type="submit">
      Submit
    </Button>
  </Form>
  )
}

export default PostForm 