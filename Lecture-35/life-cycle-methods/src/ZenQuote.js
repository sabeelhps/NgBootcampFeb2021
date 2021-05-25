import React, { Component } from 'react';
import axios from 'axios';

class ZenQuote extends Component {

    constructor(props) {
        super(props);
        console.log("Inside the Constructor");
        this.state = {
            quote:''
        }
    }

    componentDidMount() {
        console.log("Inside componentDidMount!");
        axios.get('https://api.github.com/zen')
            .then(res => {
                console.log(res.data);
                this.setState({ quote: res.data });
        })
    }


    render() {

        console.log("Inside the RENDER!")

        return (
            <div>
                <h1>Todays Quote is ....</h1>
                <p>{ this.state.quote}</p>
            </div>
        );
    }
}

export default ZenQuote;
