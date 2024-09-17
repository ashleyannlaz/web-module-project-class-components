import React from 'react';

import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const todo = [
  {
    task: 'Clean Office',
    id: 1234,
    completed: false,
  },
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todo:todo
    }
  }

  toggleItem = id => {
    this.setState({
      ...this.state.todo,
      todo: this.state.todo.map(item => {
        if(item.id === id) {
          return({
            ...item,
            completed: !item.completed
          })
        } else {
          return item
        }
      })
    });
  }

  handleAddItem = (task) => {
    const newTask = {
      task: task,
      id: Date.now(),
      completed: false
    }
    this.setState({
      todo: [...this.state.todo, newTask]
    })
  }

  handleClear = () => {
    this.setState({
      ...this.state,
      todo: this.state.todo.filter(item => {
        return(item.completed === false);
      })
    })
  }

  render() {
    return (
      <div>
        <h2>To Do Today:</h2>
        <TodoForm handleAddItem={this.handleAddItem} />
        <TodoList todo={this.state.todo} toggleItem={this.toggleItem} handleClear={this.handleClear} />
      </div>
    );
  }
}

export default App;
