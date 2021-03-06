import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './bootstrap.min.css';

function Hero(){
return (
  <div className="row">
    <div className="jumbotron col-10 offset-1">
      <h1>Author Quiz</h1>
      <p> Select The book written by the outhor shown </p>
    </div>
  </div>
);
}

function Turn(){
  //game logic
  return(<div/>);
}

function Continue(){
  return(<div/>);
}

function Footer(){
  return(<div id="footer" className="row">
        <div className="col-12">
        <p className="text-muted credit"> All images are from <a href="https://commons.wikimedia.org/wiki/Main_Page">Wikimedia Commons</a>and are in the public domains  </p>
        </div>
  </div>);
}

class AuthorQuiz extends Component {
  render() {
    return (
      <div class="container-fluid">
        <Hero/>
        <Turn/>
        <Continue/>
        <Footer/>  
      </div>
    );
  }
}

export default AuthorQuiz;
