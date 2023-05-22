import React, { Component } from 'react';
import ToDo from '../ToDo/ToDo.jsx';
import todo from '../../todo.json';
import { nanoid } from 'nanoid';
import FormToDo from 'components/FormToDo/FormToDo.jsx';

class ToDoList extends Component {
  state = {
    todoList: todo,
  };

  // Запис в локал - модуль 3 заняття 2(~1:55)+ в домашці

  componentDidMount() {
    localStorage.setItem('todo', JSON.stringify(todo));
    // localStorage.getItem('todo') &&
    //   this.setState({ todoList: JSON.parse(localStorage.getItem('todo')) });
  }

  componentDidUpdate(_, prevState) {
    prevState.todoList.length > this.state.todoList.length && alert('DELETED');
    prevState.todoList.length < this.state.todoList.length && alert('ADDED');
  }

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

  addToDo = value => {
    this.setState(prev => {
      return {
        todoList: [
          ...prev.todoList,
          { id: nanoid(), title: value, completed: false },
        ],
      };
    });
  };

  render() {
    return (
      <>
        <h1>My to-do list</h1>
        <FormToDo addToDo={this.addToDo} />
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
