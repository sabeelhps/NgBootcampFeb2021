import React, { Component } from 'react'

class Form extends Component {

    constructor() {
        super();

        this.state = {
            name: '',
            qty:''
        }
    }

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    submitHandler = (e) => {
        e.preventDefault();
        console.log(this.state);
        this.props.createItem(this.state);
        this.setState({ name: '', qty: '' });
    }

    render() {
        return (
            <form onSubmit={this.submitHandler}>
                <input type="text"
                    name="name"
                    placeholder="Item Name"
                    onChange={this.changeHandler}
                    value={this.state.name}
                />
                <input type="text"
                    name="qty"
                    placeholder="Quantity"
                    onChange={this.changeHandler}
                    value={this.state.qty}
                />
                <button>Add</button>
            </form>
        )
    }
}

export default Form;
