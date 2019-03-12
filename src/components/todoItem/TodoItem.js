//Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';

//Styles
import './todoItem.css';

export class TodoItem extends Component {
  getStyle = () => {
    return {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: '5%',
      textDecoration: this.props.todo.completed ? 'line-through wavy #24bffb' : 'none'
    }
  }

  render() {
    const { id, title } = this.props.todo;
    return (
      <li style={this.getStyle()}>
        <div>
          <input 
            id={id}
            type="checkbox" 
            checked={this.props.todo.completed}
            onChange={this.props.markComplete.bind(this, id)}
          />
          <label 
            htmlFor={id}
          > 
            { title } 
          </label>
        </div>
        <div>
          {
            this.props.todo.completed && 
              <span 
                className="delete" 
                onClick={this.props.delTodo.bind(this, id)}
              >
                {" "}
              </span>
          }
        </div>
      </li>
    )
  }
}

// PropTypes
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
}

export default TodoItem
