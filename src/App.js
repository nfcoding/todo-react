import React, { Component, Fragment } from 'react';
import TodoList from './components/TodoList';
class App extends Component {
	render() {
		return (

			<div className="todo-app">
				<TodoList />
			</div>


		);
	}
}

export default App;
