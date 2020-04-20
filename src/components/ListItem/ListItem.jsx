import React from "react";

function ListItem(props) {
	const listStyle = {
		textDecorationLine: props.check ? "line-through" : "none",
	};
	return (
		<li>
			<label>
				<input type="checkbox" id={props.id} />
				<span style={listStyle}>{props.todo}</span>
				<a className="secondary-content">
					<button>x</button>
				</a>
			</label>
		</li>
	);
}

export default ListItem;
