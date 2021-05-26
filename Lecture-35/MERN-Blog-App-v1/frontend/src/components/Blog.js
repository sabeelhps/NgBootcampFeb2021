import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import './Blog.css'

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
                    </Card.Body>
                </Card>
                
            </div>
        )
    }
}

export default Blog;
