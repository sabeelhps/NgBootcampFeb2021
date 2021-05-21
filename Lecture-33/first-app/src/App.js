import React from 'react';
import Card from './Components/Card';
import Hello from './Components/Hello';
import Product from './Components/Product';
import './App.css'

class App extends React.Component{


  constructor(props) {

    super();

    this.state = {
      cards: [
        {
          name: "Sabeel",
          age: 22,
          color: "Blue",
          hobbies:['Reading','Badminton','Athletics']
        },
        {
          name: "Kartik",
          age: 25,
          color: "Green",
          hobbies:['Reading','Coding']
        },
        {
          name: "Arnav",
          age: 22,
          color: "Red",
          hobbies:['Badminton','Athletics']
        },
        {
          name: "Monu",
          age: 22,
          color: "White",
          hobbies:['Badminton','Athletics','Cricket']
        },

      ]
    }
  }


  render() {

    let cardsList = this.state.cards.map((card) => {
      return(
            <Card name={card.name}
              age={card.age}
              color={card.color}
              hobbies={card.hobbies}
            />)
    })



    return (
      <div className="App">
        { cardsList }

        {/* <Product price={ 100}/>
        <Product price={ 200}/>
        <Product price={ 300}/>
        <Product price={ 400}/>
        */}

        <Card

          name="Jatin"
          age={22}
          color='Gray'
          hobbies={['Movies', 'Web Series']}
        />
       
        {/* <Hello /> */}
      </div>
    )
  }
}

export default App;


