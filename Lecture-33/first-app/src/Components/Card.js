import React from 'react'
import './Card.css';


function demo() {
    
    alert("STOP COPYING NOW 😠😠😠😠😠")

}



function Card(props) {

    console.log(props);

    let hobbies = props.hobbies.map(h => <li>{ h }</li>)


    return (
        <div className="Card" onCopy={demo}>
            <h1>Name : { props.name}</h1>
            <h3>Age : { props.age}</h3>
            <p>My Fav Color is {props.color}.</p>
            <h4>Hobbies</h4>
            <ul>
               {hobbies}
            </ul>
        </div>
    )
}

export default Card;
