import React from "react";
import Input from "../Input/Input";
import TodoList from "../TodoList/TodoList";

function TodoContainer() {
	return (
		<main>
			<div className={`container`}>
				<div className={`card-panel white black-text`}>
					<div className={`row`}>
						<div className={`col s10 offset-s1 m10 offset-m1 l8 offset-l2`}>
							<Input />
						</div>
					</div>
					<div className={`row`}>
						<div className={`col s10 offset-s1 m10 offset-m1 l8 offset-l2`}>
							<TodoList />
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}

export default TodoContainer;
