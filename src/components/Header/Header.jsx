import React from "react";

function Header() {
	return (
		<header>
			<nav>
				<div className={`nav-wrapper deep-purple darken-1 white-text`}>
					<a href="#" className={`brand-logo center`}>
						TodoList
					</a>
				</div>
			</nav>
		</header>
	);
}

export default Header;
