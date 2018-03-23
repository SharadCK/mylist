import React, { Component } from 'react';
import TodoDetails from './todoDetails';


class TodoListing extends Component {
	constructor() {
		super();
		this.state = {
			detailsHidden: true
			

		}
	}

	toggleDetails(e) {
		console.log("Toggle Details runs");
		this.setState({
			detailsHidden: !this.state.detailsHidden
		});
	}

	

	render() {

		if (this.state.detailsHidden) {
			return (
				<li className="todo-listing">
					<div className="detail-toggle" onClick={this.toggleDetails.bind(this)}>{this.props.name}</div>
				</li>
			);
		} else {
			return (
				<li className="todo-listing">
					<div className="detail-toggle" onClick={this.toggleDetails.bind(this)}>{this.props.name}

					 </div>
					<TodoDetails
						modifyTodo={this.props.modifyTodo}
						deleteTodo={this.props.deleteTodo}
						doneTodo={this.props.doneTodo}
						ingredients={this.props.ingredients}
						name={this.props.name} />


				</li>
			);
		}
	}
}

export default TodoListing;
