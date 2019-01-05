import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TodoItem from './TodoItem';


export default class Todos extends Component {
  render() {
    return this.props.todos.map((todo) => (
      <TodoItem 
        todo={todo}
        key={todo.id}
        markComplete={this.props.markComplete}
        delTodo={this.props.delTodo}
      />
    ));
  }
}

// PropTypes
Todos.propTypes = {
  todos: PropTypes.array.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
}
