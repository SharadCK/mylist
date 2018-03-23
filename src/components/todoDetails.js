import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import NewTodoForm from './todoForm';

class TodoDetails extends Component {
	constructor(props) {
		super(props);

       
		this.handleEdit = this.handleEdit.bind(this);
		this.handleDelete = this.handleDelete.bind(this);
		
	}



	handleEdit() {
			ReactDOM.render(<NewTodoForm
				modifyTodo={this.props.modifyTodo}
				ingredients={this.props.ingredients}
				name={this.props.name} />,
				document.getElementById('new-container'));
	}

	handleDelete(event) {
		var todoDetails = {
			title: this.props.name,
			ingredients: this.props.ingredients 
		}
		this.props.deleteTodo(todoDetails);
	}



	

	render() {
		return (
			<div className="todo-details">

				<p>Things to complete</p>
				<ul>
					{this.props.ingredients.map((item) => {
						return <li key={item}><p>{item}</p></li>
					})}
				</ul>
				<div className='details-footer'>
					<button className="delete-btn" onClick={this.handleDelete}>Delete</button>
					<button className="edit-btn" onClick={this.handleEdit}>Edit</button>	
				</div>
			</div>
		)
	}
}

export default TodoDetails;
