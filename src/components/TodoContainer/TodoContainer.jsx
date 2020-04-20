import React, { useState } from "react";
import Input from "../Input/Input";
import TodoList from "../TodoList/TodoList";

function TodoContainer() {
	const [todoItem, setTodoItem] = useState("");
	const [todos, setTodos] = useState([]);
	const [strike, setStrike] = useState(false);

	function changeTodoItem(e) {
		setTodoItem(e.target.value);
	}

	function getTodoItem(e) {
		setTodos((prevValues) => {
			return [...prevValues, todoItem];
		});
		e.preventDefault();
	}

	function toggleStrike() {
		setStrike(!prevValue);
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
							<TodoList
								list={todos}
								check={strike}
								onCheckboxClick={toggleStrike}
							/>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}

export default TodoContainer;
