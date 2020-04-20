import React from "react";
import Input from "../Input/Input";

function TodoContainer() {
	return (
		<main>
			<div className={`container`}>
				<div className={`row`}>
					<div className={`col s10 offset-s1 m10 offset-m1 l8 offset-l2`}>
						<div className={`card-panel white black-text`}>
							<Input />
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}

export default TodoContainer;
