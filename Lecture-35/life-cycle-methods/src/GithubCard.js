import React, { Component } from 'react';
import axios from 'axios';

class GithubCard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            img_url:''
        }
        console.log("Inside constructor")
    }

    async componentDidMount() {
        console.log("Inside ComponentDidMount");
        const url =`https://api.github.com/users/${this.props.username}`
        const res = await axios.get(url);
        // console.log(res.data);
        this.setState({img_url:res.data.avatar_url,username:res.data.name})
    }

    componentDidUpdate(prevProps,prevState) {
        console.log('Component DID Update');
        console.log(prevState);
        console.log("Current State");
        console.log(this.state);
    }


    render() {
        console.log("RENDER!!");      
        return (
            <figure>
                <img src={this.state.img_url} alt="" />
                <figcaption>
                    {this.state.username}
                </figcaption>
            </figure>
        );
    }
}

export default GithubCard;
