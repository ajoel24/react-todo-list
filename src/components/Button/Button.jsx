import React from "react";

function Button(props) {
	return (
		<button
			type={props.type}
			name={props.name}
			className={props.class}
			onClick={props.onClick}
		>
			{props.innerHTML}
		</button>
	);
}

export default Button;
