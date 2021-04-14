import React, {useEffect, useState} from 'react';
import './App.scss';
import { get } from './api';
import AppDrawer from './components/AppDrawer'
import AppContainer from './components/AppContent'

const App = () => {
  const [lists, setLists] = useState([]);
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    get('lists').then(setLists);
    get('todos').then(setTodos);
  }, [])

  return (
    <div className="app">
      <AppDrawer
      lists={lists}
      />
      <AppContainer>
      <ul>
        {todos.map(todo =>
        <li key={todo.id}>
          {todo.title}
        </li>
        )}
      </ul>
      </AppContainer>
    </div>
  );
}

export default App;
