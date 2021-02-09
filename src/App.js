import React from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import './App.scss';
import HomePage from './components/HomePage';
import NotFoundPage from './components/NotFoundPage';
import AlbumListApp from './features/AlbumList';
import TodoListApp from './features/TodoList';


function App() {


  return (
    <div className="app">
      Header
      <NavLink to="/home">Home Page</NavLink>
      <NavLink to="/todos" active-classname="active-menu">Todo List</NavLink>
      <NavLink to="/albums" active-classname="active">Album List</NavLink>

      <Switch>
        <Route path="/home" component={HomePage} exact />
        <Route path="/todos" component={TodoListApp} />
        <Route path="/albums" component={AlbumListApp} />

        <Route component={NotFoundPage} />
      </Switch>
      Footer
    </div>
  )
}

export default App;
