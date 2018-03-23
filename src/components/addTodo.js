import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import NewTodoForm from './todoForm';

class AddTodo extends Component {


	constructor(props) {
		super(props);

		this.openTodoForm = this.openTodoForm.bind(this);
		this.keyCounter = 0;
	}

	openTodoForm() {
		this.keyCounter++;
		ReactDOM.render(<NewTodoForm key={this.keyCounter} addTodo={this.props.addTodo} />, document.getElementById('new-container'));
	}

	render() {
		return <button className="AddTodo" onClick={this.openTodoForm}>Add Todo</button>
	}
}

export default AddTodo;

