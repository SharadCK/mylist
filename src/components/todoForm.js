import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class NewTodoForm extends Component {
	constructor() {
		super();
		this.state = {
			inputText: '',
			textareaText: '',
			originalName: ''
		}

		this.todoToEdit;

		this.handleSubmit = this.handleSubmit.bind(this);
		this.isExistingTodo = this.isExistingTodo.bind(this);
		this.buildStringFromIngredients = this.buildStringFromIngredients.bind(this);
	}

	closeNewTodoForm() {
		ReactDOM.unmountComponentAtNode(document.getElementById('new-container'));
	}

	componentWillMount() {
		this.setState({
			originalName: this.props.name
		});
		
		if (this.props.ingredients) {
			this.setState({
				inputText: this.props.name,
				textareaText: this.buildStringFromIngredients(this.props.ingredients)
			});

			this.todoToEdit = {
				name: this.props.name,
				ingredients: this.buildStringFromIngredients(this.props.ingredients)
			}
		}
	}

	handleSubmit(event) {
		event.preventDefault(); 
		var newTodoDetails = {
			title: this.state.inputText.trim() ? this.state.inputText : 'Untitled',
			ingredients: this.getIngredientsFromString(this.state.textareaText)
		};
		 // callback function
		if (this.todoToEdit) {
			this.props.modifyTodo(newTodoDetails, this.state.originalName); 
		} else {
			this.props.addTodo(newTodoDetails);
		}

		
		this.closeNewTodoForm();
	}

	isExistingTodo() {
		return this.todoToEdit;
	}

	getIngredientsFromString(str) {
		return str.split(",").map(ingredient => ingredient.trim());
	}

	buildStringFromIngredients(arr) {
		return arr.join(', ');
	}

	render() {
		return (
			<form className="new-todo-form" onSubmit={this.handleSubmit}>
				<div className="new-todo-header">
					<p className="m-font">Todo</p>
					<p className="close-icon" onClick={this.closeNewTodoForm}>&#10005;</p>
					
				</div>
				<hr />
				<div className="new-todo-body">
					<div>
						<p>Task</p>
						<input type="text"
							placeholder="Title"
							value={this.state.inputText }							
							onChange={(event) => this.setState({ inputText: event.target.value })}
						/>
					</div>
					<div>
						<p>Things to complete</p>
						<textarea
							placeholder="Enter specifics separated by ,"
							value={this.state.textareaText }							
							onChange={(event) => this.setState({ textareaText: event.target.value })}></textarea>
					</div>
				</div>
					<div className="new-todo-footer">
						<button type="submit" className="add-todo-button">Submit</button>
						<button className="edit-btn" onClick={this.closeNewTodoForm}>Close</button>
					</div>
				</form>
			)
		}
	}

export default NewTodoForm;
