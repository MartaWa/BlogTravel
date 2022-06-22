import React from 'react'
import { Button, Card } from 'react-bootstrap'


const Post = (props) => {
  return (
    <>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="" />
      <Card.Body>  
        <Card.Title>{props.post.title}</Card.Title>
          <Card.Text>
          This is post {props.post.user_id}.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
       </Card.Body>
    </Card>

    
    
    
    <h1>All posts: {props.post.title}</h1>
    <h2>Post id: {props.post.post_id}</h2>
    <h3>Summary:{props.post.summary}</h3>
    </>
  )
}

export default Post



