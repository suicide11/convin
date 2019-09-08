import React,{Component} from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar'
import SearchDomainIndex from './Components/SearchDomain/index'
import UserIndex from './Components/User/index'
import CreateDomainIndex from './Components/CreateDomain/index'
import { BrowserRouter, Route, Link } from "react-router-dom";
class App extends Component{
  render(){
    return(
      <BrowserRouter>
        <Navbar></Navbar>
        <Route exact path="/" component={UserIndex}></Route>
        <Route exact path="/Create" component={CreateDomainIndex}></Route>
        <Route exact path="/Search" component={SearchDomainIndex}></Route>
      </BrowserRouter>
    )
  }
}
export default App;
