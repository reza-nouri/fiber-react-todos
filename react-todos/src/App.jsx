import React from 'react';
import Header from './components/Layout/Header';
import TodoList from './components/Todo/TodoList';

const App = () => {
    return(
        <React.Fragment>
            <Header />
            <TodoList />
        </React.Fragment>
    )
}

export default App;