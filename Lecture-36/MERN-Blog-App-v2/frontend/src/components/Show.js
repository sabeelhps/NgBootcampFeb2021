import React, { Component } from 'react'
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Show extends Component {

    constructor(props) {
        super(props);
        this.state = {
            author: '',
            img: '',
            content: '',
            createdAt:''
        }
    }


    async componentDidMount() {
        console.log(this.props);

        let blog=await axios.get(`/blogs/${this.props.match.params.id}`);
        // console.log(blog);
        blog = blog.data;
        this.setState({ author: blog.author, img: blog.img, content: blog.content, createdAt: blog.createdAt });
    }

    deleteBlogHandler = async () => {
        await axios.delete(`/blogs/${this.props.match.params.id}`);
        this.props.history.push('/blogs');
    }


    render() {
        return (
            <div>
                <h1>Show Blog</h1>
                 <Card>
                    <Card.Img variant="top" src={this.state.img} />
                    <Card.Body>
                        <Card.Title>{ this.state.author}</Card.Title>
                    <Card.Text>
                       {this.state.content}
                        </Card.Text>
                        <Link to={`/blogs/${this.props.match.params.id}/edit`}>
                            <Button variant="success">Edit</Button>
                        </Link>
                       
                        <Button onClick={this.deleteBlogHandler} style={{ margin: '10px' }}  variant="danger">Delete</Button>
                       
                        
                    </Card.Body>
                </Card>
                
            </div>
        )
    }
}

export default Show;
