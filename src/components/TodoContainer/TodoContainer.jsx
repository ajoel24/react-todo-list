import React, { useState } from "react";
import Input from "../Input/Input";
import TodoList from "../TodoList/TodoList";

function TodoContainer() {
	const [todoItem, setTodoItem] = useState("");
	const [todos, setTodos] = useState([]);

	function changeTodoItem(e) {
		setTodoItem(e.target.value);
	}

	function getTodoItem(e) {
		setTodos((prevValues) => {
			return [...prevValues, todoItem];
		});
		setTodoItem("");
		e.preventDefault();
	}

	function deleteItem(id) {
		setTodos((prevValues) => {
			return prevValues.filter((todo, index) => {
				return index !== id;
			});
		});
	}

	return (
		<main>
			<div className={`container`}>
				<div className={`card-panel white black-text`}>
					<div className={`row`}>
						<div className={`col s10 offset-s1 m10 offset-m1 l8 offset-l2`}>
							<Input
								value={todoItem}
								onChange={changeTodoItem}
								onClick={getTodoItem}
							/>
						</div>
					</div>
					<div className={`row`}>
						<div className={`col s10 offset-s1 m10 offset-m1 l8 offset-l2`}>
							{todos.length > 0 && (
								<TodoList list={todos} onChecked={deleteItem} />
							)}
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}

export default TodoContainer;
