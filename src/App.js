import React from "react";
import { useState, useEffect } from "react";
import "./App.css";

function App() {
	const [jokeSetup, setJokeSetup] = useState("");
	const [jokePunchline, setJokePunchline] = useState("");

	const fetchData = async () => {
		const data = await fetch(
			"https://official-joke-api.appspot.com/random_joke"
		);
		const response = await data.json();
		setJokeSetup(response.setup);
		setJokePunchline(response.punchline);
	};

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<div className="container">
			<p className="setup">
				<span>Setup: </span>
				{jokeSetup}
			</p>
			<p className="punchline">
				<span>Punchline: </span>
				{jokePunchline}
			</p>
			<button onClick={fetchData}>Next Joke</button>
		</div>
	);
}

export default App;
