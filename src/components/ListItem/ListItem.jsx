import React from "react";

function ListItem(props) {
	return (
		<li>
			<input type="checkbox" id={props.id} />
			<span>{props.todo}</span>
			<a className="secondary-content">
				<button>x</button>
			</a>
		</li>
	);
}

export default ListItem;
