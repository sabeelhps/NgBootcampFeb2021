import React, { Component } from 'react'
import axios from 'axios';

class New extends Component {

    constructor(props) {
        super(props);
        this.state = {
            author: '',
            img: '',
            content:''
        }
    }

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    submitHandler = async(e) => {
        e.preventDefault();
        await axios.post('/blogs', this.state);
        console.log(this.props);
        this.props.history.push('/blogs');
    }



    render() {
        return (
            <form onSubmit={this.submitHandler}>

                <label htmlFor="author">Author</label>
                <br />
                <input
                    type="text"
                    name="author"
                    onChange={this.changeHandler}
                    placeholder="Author"
                />
                <br/>
                <br/>
                <label htmlFor="img">Image URL</label>
                <br />
                <input
                    type="text"
                    name="img"
                    onChange={this.changeHandler}
                    placeholder="Image"
                />
                <br/>
                <br/>
                <label htmlFor="content">Content</label>
                <br />
                <textarea
                    type="text"
                    name="content" cols="30" rows="5"
                    onChange={this.changeHandler}
                    placeholder="Your Content Goes Here"

                ></textarea>
                <br/>
                <br/>
                <br/>
                <button>Submit</button>

            </form>
        )
    }
}
export default New;
