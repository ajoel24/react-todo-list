import React from "react";

function InputField(props) {
	return (
		<div>
			<input
				type={props.type}
				name={props.name}
				placeholder={props.placeholder}
			/>
			<label htmlFor={props.name}>Todo:</label>
		</div>
	);
}

export default InputField;
