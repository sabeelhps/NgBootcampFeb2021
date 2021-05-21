import React, { Component } from 'react'

const getMoods = () => {
  
    const moods = ['Angry', 'Happy', 'Paranoid', 'Queit', 'Sad','hungry'];
  
  
    return moods[Math.floor(Math.random() * moods.length)];
  }
  
  const getNum = () => {
  
    return Math.floor(Math.random() * 10) + 1;
  }


class Hello extends Component {
    render() {
        
    let num = getNum();

    let msg;

    if (num === 7) {
      msg=<p>Lucky!!!</p>
    } else {
      msg=<p>UnLucky</p>
    }


    return (
      <div>
        {/* <h1>Hello From React App {2+3+10} </h1>
        <p>This is my first Paragraph</p>
        <h2>My Mood is {getMoods()}</h2>
        
        <p>My Number is { num} {num===7 ? 'Lucky Number' : 'Unlucky'}</p>

        {msg}
        
        <Card /> */}

        <h1>My Number is : { num}</h1>

        {/* {
          num === 7 ?
            <img src="https://media2.giphy.com/media/2sXf9PbHcEdE1x059I/giphy.gif?cid=e1bb72ff5b7ca7bf48637959772e6344" />
            :null
        } */}

        {
          num === 7 &&
            <img src="https://media2.giphy.com/media/2sXf9PbHcEdE1x059I/giphy.gif?cid=e1bb72ff5b7ca7bf48637959772e6344" />
  
        }




      </div>
    )
    }
}

export default Hello;
