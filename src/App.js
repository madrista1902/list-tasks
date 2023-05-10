import React from 'react';
import { Provider } from 'react-redux';
import store from './JS/Store';


import ListTask from './Components/ListTask/ListTask';

function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <h1>To Do List</h1>
        
        <ListTask />
      </div>
    </Provider>
  );
}

export default App;
