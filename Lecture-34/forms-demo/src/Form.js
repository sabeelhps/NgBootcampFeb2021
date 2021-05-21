import React, { Component } from 'react';

class Form extends Component {

    constructor() {
        super()
        this.state = {
            username: '',
            qty:''
        }
    }

    // nameChangeHandler = (e)=>{
    //     this.setState({ username: e.target.value });
    // }

    // qtyChangeHandler = (e) => {
    //     this.setState({ qty: e.target.value });
    // }

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }


    submitHandler = (e) => {
        e.preventDefault();
        console.log(this.state);
        
    }


    render() {
        return (
            <form onSubmit={this.submitHandler}>
                <h1>Form Demo</h1>
                <input
                    type="text"
                    name="username"
                    onChange={this.changeHandler}
                />
                
                <input
                    type="text"
                    name="qty"
                    onChange={this.changeHandler}
                />

                <button>Submit</button>

            </form>
        );
    }
}

export default Form;
