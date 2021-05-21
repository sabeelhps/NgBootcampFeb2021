import React, { Component } from 'react';

class Input extends Component {

    constructor() {
        super();
        this.state = {
            username:''
        }
    }

    nameChangeHandler = (e) => {
        this.setState({ username: e.target.value });
        // console.log(e.target.value);
    }


    render() {
        return (
            <div style={{ textAlign: 'center', marginTop: '50px' }}>
                <h1>{ this.state.username}</h1>
                <label htmlFor="username">Username</label>
                <input type="text"
                    id="username"
                    name="username"
                    onChange={this.nameChangeHandler}
                />
            </div>
        );
    }
}

export default Input;
