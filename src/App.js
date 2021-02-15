import React from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import './App.scss';
import HomePage from './components/HomePage';
import NotFoundPage from './components/NotFoundPage';
import AlbumListApp from './features/AlbumList';
import TodoListApp from './features/TodoList';
import CounterApp from './features/Counter';
import Header from 'components/Header';

function App() {
  return (
    <div className="app">
      <Header />
      <Switch>
        <Route path="/home" component={HomePage} exact />
        <Route path="/todos" component={TodoListApp} />
        <Route path="/albums" component={AlbumListApp} />
        <Route path="/counter" component={CounterApp} />

        <Route component={NotFoundPage} />
      </Switch>
      Footer
    </div>
  );
}

export default App;
