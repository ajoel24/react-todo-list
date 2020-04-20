import React from "react";

function Input() {
	return (
		<div className="row">
			<div className={`col s12 m10 offset-m1`}>
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
						<div className={`col s4 center`}>
							<button
								className={`btn btn-medium white blue-text`}
								type="submit"
							>
								<b>Add</b>
							</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
}

export default Input;
