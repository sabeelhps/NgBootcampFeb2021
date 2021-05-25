import React, { Component } from 'react';
import ZenQuote from './ZenQuote';
import './App.css';
import GithubCard from './GithubCard'
import Home from './Home';
import Contact from './Contact';
import About from './About';
import Card from './Card';
import { Route,Switch,Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">

        {/* <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav> */}

        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>



        <Switch>
          <Route exact path="/" component={()=><Home item="banana" />}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/card/:id" component={Card}/>
        </Switch>
      </div>
    );
  }
}

export default App;
