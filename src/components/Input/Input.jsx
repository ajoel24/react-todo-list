import React from "react";

function Input() {
	return (
		<form>
			<input type="text" name="todoItem" placeholder="Example: Buy water" />
			<button type="submit">Add</button>
		</form>
	);
}

export default Input;
