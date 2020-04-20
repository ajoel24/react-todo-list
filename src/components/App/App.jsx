import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import TodoContainer from "../TodoContainer/TodoContainer";
import "./App.css";

function App() {
	return (
		<section>
			<Header />
			<TodoContainer />
			<Footer />
		</section>
	);
}

export default App;
