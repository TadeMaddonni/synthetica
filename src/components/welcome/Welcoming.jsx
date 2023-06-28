import React, { useEffect } from "react";

const Welcoming = () => {
	useEffect(() => {
		setTimeout(() => {
			window.location.href = "/home";
		}, 4000);
	}, []);
	return (
		<div className="App">
			<video
				className="videoLoader"
				muted
				autoPlay
				src="./src/assets/synthetica.mp4"
			></video>
		</div>
	);
};

export default Welcoming;
