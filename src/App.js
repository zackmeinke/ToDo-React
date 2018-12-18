import React, { Component } from 'react';
import TodoList from './TodoList';
import AddBar from './AddBar';
import './App.css';

class App extends Component {
  
    constructor() {
      super();
      this.state = {
        todos: ["A", "B", "C"],
        currentText: 'f'
      }
    }
    setText = (e) => {
      console.log(e);
      const newValue = e.target.value;
      this.setState({currentText: newValue})
    };
    addTodo = () => {
      const newTodo = this.state.currentText;
      const todos = [...this.state.todos, newTodo];
      this.setState({ todos, currentText: ''});
    }

    render() {
    const {currentText, todos} = this.state;

    return (
      <div>
        <AddBar currentText = {this.currentText} 
                setText = {this.setText}
                addTodo = {this.addTodo}
                />
        <TodoList todos = {todos}/>
      </div>
    );
  }
}

export default App;
