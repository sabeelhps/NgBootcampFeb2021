import React, { Component } from 'react'
import './App.css';
import BlogList from './components/BlogList';


export default class App extends Component {
  render() {
    return (
      <div className="App">
          <BlogList />
      </div>
    )
  }
}
