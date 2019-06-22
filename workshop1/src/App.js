import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PostcodeCheckForm from './PostcodeCheckForm';
let name="ido";
const list = [{title: 'React',url: 'https://facebook.github.io/react/',author: 'Jordan Walke',num_comments: 3,points: 4,objectID: 0,}, {title: 'Redux',url: 'https://github.com/reactjs/redux',author: 'Dan Abramov, Andrew Clark',num_comments: 2,points: 5,objectID: 1,}, ];
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">{name}, Welcom toReact</h1>
        </header>
        <PostcodeCheckForm/>
        <ul>
                {list.map(function(name, index){
                    return <li key={ index }>{name.title}</li>;
                  })}
            </ul>
        <p className="App-intro">
          To get , edit <code>src/App.js</code> and save to reload.
         
        </p>
         
      </div>
    );
  }
}

export default App;