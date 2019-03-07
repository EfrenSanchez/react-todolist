import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class TodoItem extends Component {
  getStyle = () =>{
    return {
      background: '#f4f4f4',
      padding: '10px',
      borderBottom:'1px #ccc dotted',
      textDecoration: this.props.todo.completed ? 'line-through' : 'none',
      textTransform: 'uppercase'
    }
  }

  
  render() {
    const { title, id } = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <p>
          <input 
            style={{marginRight: '8px'}}
            checked={this.props.todo.completed}
            type="checkbox"
            onChange={ this.props.markComplete.bind(this, id) }
          />  
          { title }
          <button
            style={btnStyle}
            onClick={this.props.delTodo.bind(this, id)}
          >
            <span role="img" aria-label="delete">&#10060;</span>
          </button>
        </p>
      </div>
    )
  }
}

// PropTypes
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
}

const btnStyle ={
  background: '#F5A9A9',
  padding:'5px 10px',
  border: '1px solid #000',
  borderRadius: '50%',
  cursor: 'pointer',
  float: 'right'
}