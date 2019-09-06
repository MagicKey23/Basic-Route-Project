import React from 'react';
import './App.css';
import Header from './components/header/header.component'
import {Switch} from 'react-router-dom';
import {Route} from 'react-router-dom'
import  HomePage from './pages/homepage/homepage.component'
class App extends React.Component{

  render(){
    return(
      <div class="app">
      <Header></Header>
      <Switch>
      <Route exact path='/' component= {HomePage}/>
      </Switch>
      </div>
    )
    
  }
}

export default App;
