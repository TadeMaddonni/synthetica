import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Welcoming = () => {
	const [toggler, setToggler] = useState(false);
	useEffect(() => {
		setTimeout(() => {
			setToggler(true);
		}, 4000);
	}, []);
	return (
		<div className="App">
			<video
				className="videoLoader"
				muted
				autoPlay
				src="./synthetica.mp4"
			></video>
			{toggler && (
				<Link to={"/inicio"} className="navigator">
					<span>
						Feel da synthetics'{" "}
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="32"
							height="32"
							viewBox="0 0 24 24"
						>
							<path fill="currentColor" d="m10 17l5-5l-5-5v10z" />
						</svg>
					</span>
				</Link>
			)}
		</div>
	);
};

export default Welcoming;
