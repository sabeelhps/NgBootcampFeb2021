import React, { Component } from 'react'
import Blog from './Blog';
import './BlogList.css'
import axios from 'axios';

class BlogList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            blogs: []
        }
    }

    async componentDidMount() {
        const fetchedBlogs = await axios.get('/blogs');
        console.log(fetchedBlogs);
        this.setState({ blogs: fetchedBlogs.data });
    }


    render() {

        let blogList = this.state.blogs.map((blog) => {
            return <Blog
                key={blog._id}
                author={blog.author}
                img={blog.img}
                content={blog.content}
                createdAt={blog.createdAt}
            />
        })


        return (
            <div className="BlogList">
                {blogList}
            </div>
        )
    }
}

export default BlogList;
