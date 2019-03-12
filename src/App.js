//Dependencies
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';

//Components
import Header from './components/layout/Header';
import Todos from './components/todos/Todos';
import AddTodo from './components/addTodo/AddTodo';
import About from './components/pages/About';
import Spinner from './components/spinner/Spinner';

//Styles
import './App.css';

class App extends Component {
  state = {
    todos: [],
    isLoading: false,
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=3')
      .then(res => this.setState({ todos: res.data }))
      .catch(error => console.log(error))
      .then(done => this.setState({ isLoading: false }) );
  }

  // Toggle Complete
  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    }) });
  }

  // Delete Todo
  delTodo = (id) => {
    this.setState({ isLoading: true });
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(res => this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] }))
      .catch(error => console.log(error))
      .then(done => this.setState({ isLoading: false }) );
  }

  // Add Todo
  addTodo = (title) => {
    this.setState({ isLoading: true });
    axios.post('https://jsonplaceholder.typicode.com/todos', {
      title,
      completed: false
    })
      .then(res => this.setState({ todos: [...this.state.todos, res.data] }))
      .catch(error => console.log(error))
      .then(done => this.setState({ isLoading: false }) );
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route exact path="/" render={props => (
              <React.Fragment>
                <AddTodo addTodo={this.addTodo} />
                <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />
                { this.state.isLoading && <Spinner /> }
              </React.Fragment>
            )} />
            <Route path="/about" component={About} />
          </div>  
        </div>
      </Router>
    );
  }
}

export default App;
