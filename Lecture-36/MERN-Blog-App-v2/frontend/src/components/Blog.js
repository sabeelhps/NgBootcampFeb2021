import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';
import './Blog.css'
import { Link } from 'react-router-dom';

class Blog extends Component {


    render() {
        return (
            <div className="Blog">
                <Card>
                    <Card.Img variant="top" src={this.props.img} />
                    <Card.Body>
                        <Card.Title>{ this.props.author}</Card.Title>
                    <Card.Text>
                       {this.props.content}
                        </Card.Text>
                        <Link to={`/blogs/${this.props.id}`}>
                            <Button variant="success">Show</Button>
                        </Link>
                        
                    </Card.Body>
                </Card>
                
            </div>
        )
    }
}

export default Blog;
