import React from "react";

function Button(props) {
	return (
		<button type={props.type} name={props.name}>
			{props.innerHTML}
		</button>
	);
}

export default Button;
