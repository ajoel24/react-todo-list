import React from "react";
import ListItem from "../ListItem/ListItem";

function TodoList(props) {
	function createListItem(todo, index) {
		return <ListItem todo={todo} key={index} id={index} />;
	}

	return (
		<ul className={`collection with-header`}>
			<li className="collection-header">
				<h5>Your Todos:</h5>
			</li>
			{props.list.map(createListItem)}
		</ul>
	);
}

export default TodoList;
