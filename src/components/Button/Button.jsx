import React from "react";

function Button(props) {
	return (
		<button type={props.type} name={props.name} className={props.class}>
			{props.innerHTML}
		</button>
	);
}

export default Button;
