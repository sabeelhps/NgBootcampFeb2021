import React, { Component } from 'react';

class Card extends Component {
    render() {

        console.log(this.props);

        return (
            <div style={{width:'400px',boxShadow:'1px 2px 3px gray',border:'1px solid #ccc'}}>
                <h1>This is the Card with id : {this.props.match.params.id}</h1>
            </div>
        );
    }
}

export default Card;
