import React from 'react';
import './App.css';
import Header from './components/header/header.component';
import {Switch} from 'react-router-dom';
import {Route} from 'react-router-dom';
import  HomePage from './pages/homepage/homepage.component';
import Contact from './pages/contact/contact.component';
import About from './pages/about/about.component';
import Menu from './pages/menu/menu.component';
class App extends React.Component{

  render(){
    return(
      <div class="app">
      <Header></Header>
      <Switch>
      <Route exact path='/' component= {HomePage}/>
      <Route exact path='/contact' component= {Contact}/>
      <Route exact path='/about' component= {About}/>
      <Route exact path='/menu' component= {Menu}/>


      </Switch>
      </div>
    )
    
  }
}

export default App;
