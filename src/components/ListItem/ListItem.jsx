import React, { useState } from "react";

function ListItem(props) {
	const [strike, setStrike] = useState(false);

	function toggleStrike() {
		setStrike(!strike);
	}

	const listStyle = {
		textDecoration: strike ? "line-through" : "none",
		fontWeight: !strike && "bold",
		color: "#000",
	};

	return (
		<li>
			<label>
				<input type="checkbox" onClick={toggleStrike} />
				<span style={listStyle}>{props.todo}</span>
				<a className="secondary-content">
					<button onClick={() => props.onChecked(props.id)}>x</button>
				</a>
			</label>
		</li>
	);
}

export default ListItem;
