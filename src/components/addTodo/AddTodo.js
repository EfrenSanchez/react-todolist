//Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';

//Styles
import './addTodo.css';

export class AddTodo extends Component {
  state = {
    title: ''
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ title: '' });
  }

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <form onSubmit={this.onSubmit} className="form">
        <label className="form__label" htmlFor="todo">~ Today I need to ~</label>
        <input 
          type="text" 
          id="todo"
          name="title"
          className="form__input"
          size="30"
          placeholder="Add Todo ..." 
          value={this.state.title}
          onChange={this.onChange}
          required
        />
        <button type="submit" className="form__button"><span>Submit</span></button>
      </form>
    )
  }
}

// PropTypes
AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired
}

export default AddTodo

