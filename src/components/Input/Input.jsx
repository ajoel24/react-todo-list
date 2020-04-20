import React from "react";

function Input() {
	return (
		<div className="row">
			<div classname={`col s12`}>
				<form>
					<div className={`row`}>
						<div className={`col s8`}>
							<input
								type="text"
								name="todoItem"
								placeholder="Example: Buy water"
							/>
							<label htmlFor="todoItem">Todo:</label>
						</div>
						<div className={`col s4`}>
							<button className={`btn btn-small`} type="submit">
								Add
							</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
}

export default Input;
