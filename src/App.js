import React from 'react';
import './App.scss';
import TodoListApp from './components/TodoList';
import AlbumListApp from './components/AlbumList';


function App() {


  return (
    <div className="app">
      <TodoListApp />
      <AlbumListApp />
    </div>
  )
}

export default App;
