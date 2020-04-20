import React from "react";
import InputField from "../InputField/InputField";

function Input() {
	return (
		<div className="row">
			<div className={`col s12 m10 offset-m1`}>
				<form>
					<div className={`row`}>
						<div className={`col s8`}>
							<InputField
								type="text"
								placeholder="Ex. Call plumber."
								name="todoItem"
							/>
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
