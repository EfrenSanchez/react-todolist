//Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';

//Components
import TodoItem from '../todoItem/TodoItem';

//Styles
import './todos.css';

class Todos extends Component {
  render() {
    return (
      <ul className="toDoList">
        {
          this.props.todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} markComplete={this.props.markComplete} delTodo={this.props.delTodo} />
          ))
        }
      </ul>
    )
  }
}

// PropTypes
Todos.propTypes = {
  todos: PropTypes.array.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
}

export default Todos;