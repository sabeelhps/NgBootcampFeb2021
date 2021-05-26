import React, { Component } from 'react'
import './App.css';
import BlogList from './components/BlogList';
import { Route, Switch } from 'react-router-dom';
import Show from './components/Show';
import New from './components/New';
import Edit from './components/Edit';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/blogs" component={BlogList} />
          <Route exact path="/blogs/new" component={ New}/>
          <Route exact path="/blogs/:id" component={Show} />
          <Route exact path="/blogs/:id/edit" component={ Edit}/>
        </Switch>
      </div>
    )
  }
}
