import React, { Component } from 'react';  
import Header from "./components/Header";
import Section from "./components/Section";
import Login from "./Pages/Login";
import AnimeList from './Pages/AnimeList';  
import Manga from './Pages/Manga';
import Footer from './components/Footer'; 
import Popular from './Pages/Popular';
import Contact from './Pages/Contact';
import Watch from './Pages/Watch';
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends React.Component{
    render() {
        return (
            <div>   
                <Router>
                    <Header />
                        <Switch>
                            <Route exact path="/login" component={Login}/>
                            <Route exact path="/animelist" component={AnimeList}/>
                            <Route exact path="/manga" component={Manga}/>
                            <Route exact path="/popular" component={Popular}/>
                            <Route exact path="/contact" component={Contact}/>  
                            <Route exact path="/watch" component={Watch}/>  
                            <Route exact path="/" component={Section}/>
                        </ Switch>
                    <Footer />
                </ Router>
            </div>
        )
    }
}

export default App;
