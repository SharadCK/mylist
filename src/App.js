import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';

import IndexView from './components/indexView';
import AddTodo from './components/addTodo';

import originalTodos from './data/mainTodo';

// var localStorageTest = originaltodos;

class App extends Component {
	constructor(props) {
		super(props);
		if (!localStorage.getItem('todos')) {
			localStorage.setItem('todos', JSON.stringify(originalTodos));
			this.state = { todos: originalTodos };
		} else {
			this.state = { todos: JSON.parse(localStorage.getItem('todos')) };
		}

		this.addTodo = this.addTodo.bind(this);
		this.deleteTodo = this.deleteTodo.bind(this);
		this.modifyTodo = this.modifyTodo.bind(this);
	}

	componentWillUnmount() {
		localStorage.setItem('todos', JSON.stringify(this.state.todos));
	}

	deleteTodo(todoInfo) {
		this.setState({
			todos: this.state.todos.filter((todo) => {
				return todo.name !== todoInfo.title;
			})

		});

		localStorage.setItem('todos', JSON.stringify(this.state.todos));
		// how to take out an item from an array - filter?
	}

	modifyTodo(todoInfo, nameBeforeEdit) {
		// var updatedtodos = this.state.todos;
		this.setState({
			todos: this.state.todos.map((todo) => {
				if (todo.name === nameBeforeEdit) {
					return {
						name: todoInfo.title,
						ingredients: todoInfo.ingredients
					}
				} else {
					return todo;
				}
			})
		});
		localStorage.setItem('todos', JSON.stringify(this.state.todos));
	}

	addTodo(todoInfo) {
		var updatedtodos = this.state.todos;
		updatedtodos.push({
	    name: todoInfo.title,
	    ingredients: todoInfo.ingredients
	  });

		this.setState({
			todos: updatedtodos
		})

		localStorage.setItem('todos', JSON.stringify(this.state.todos));
		// After it adds a Todo it should also close the form down
	}


  render() {
    return (
      <div className="App">
				<div id="new-container"></div>
				<div className="App-header">
				{/* <img src={logo} className="App-logo" alt="logo" /> */}
				<h2>MyList App</h2>
			</div>
				<div id="root"></div>
				<AddTodo addTodo={this.addTodo} />
				<IndexView

					todoBank={this.state.todos}
					modifyTodo={this.modifyTodo}
					deleteTodo={this.deleteTodo} />				
      </div>
    );
  }
}

export default App;




