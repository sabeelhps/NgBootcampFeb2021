import React, { Component } from 'react';

class Person extends Component {
    constructor() {
        super();

        this.state = {
            name: 'Sabeel',
            age: 22,
            favColor: 'blue',
            show:false
        }
    }

    nameChangeHandler = () => {
        const newName = this.state.name;
        this.setState({ name: newName.toUpperCase()});
    }

    cardToggleHandler = () => {
        this.setState({ show: !this.state.show });
    }

    render() {
        return (
            <div>
                <button onClick={this.cardToggleHandler} style={{margin:'40px'}}>Toggle</button>
                
                {
                    this.state.show ?
                    <article onClick={this.nameChangeHandler} style={{ width: '400px', margin: '10px auto', boxShadow: '0px 1px 2px gray', padding: '16px' }}>
                        <h2>Name : {this.state.name}</h2>
                        <p>Age : {this.state.age}</p>
                        <p>Fav Color : { this.state.favColor}</p>
                    </article>
                    :null
                }
            </div>
        );
    }
}

export default Person;
