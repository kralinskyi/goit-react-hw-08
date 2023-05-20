import React, { Component } from 'react';
import ToDo from '../ToDo/ToDo.jsx';
import todo from '../../todo.json';

class ToDoList extends Component {
  state = {
    todoList: todo,
  };

  handleCheckedCompleted = id => {
    this.setState(prevState => ({
      todoList: prevState.todoList.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      ),
    }));
  };

  deleteTodoItem = id => {
    this.setState(prev => ({
      todoList: prev.todoList.filter(todo => todo.id !== id),
    }));
  };

  render() {
    return (
      <>
        <h1>My to-do list</h1>
        <ul>
          {this.state.todoList.map(todo => (
            <ToDo
              key={todo.id}
              todo={todo}
              handleCheckedCompleted={this.handleCheckedCompleted}
              deleteTodoItem={this.deleteTodoItem}
            />
          ))}
        </ul>
      </>
    );
  }
}

export default ToDoList;
