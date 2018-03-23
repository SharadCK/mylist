import React, { Component } from 'react';
import TodoListing from './todoList';

class IndexView extends Component {

	constructor(props) {
		super(props);

	}

	render() {
		
		if (this.props.todoBank === '') {
			return <div>Loading...</div>
		} else {
			return (
				<div className="IndexView">
					<ul id="IndexViewList">
						{this.props.todoBank.map((item) =>
							// <li>{item.name}</li>
							<TodoListing
								modifyTodo={this.props.modifyTodo}
								deleteTodo={this.props.deleteTodo}
								doneTodo={this.props.doneTodo}
								key={item.name}
								name={item.name}
								ingredients={item.ingredients} />
						)}
					</ul>
				</div>
			)
		}

	}
}

export default IndexView;
