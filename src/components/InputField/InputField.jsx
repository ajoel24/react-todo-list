import React from "react";

function InputField(props) {
	return (
		<div>
			<input
				type={props.type}
				name={props.name}
				placeholder={props.placeholder}
			/>
			<label htmlFor={props.htmlFor}>Todo:</label>
		</div>
	);
}

export default InputField;
