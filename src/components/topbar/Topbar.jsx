import React, { useEffect, useState } from "react";
import "./topbar.scss";
import { Link } from "react-router-dom";

const Topbar = () => {
	const [toggler, setToggler] = useState(false);
	const [activeLocation, setActiveLocation] = useState("");
	const handleLocation = () => {
		const location = window.location.href;
		const splitted = location.split("/");
		const last = splitted[splitted.length - 1];
		return last;
	};

	const handleToggler = () => {
		setToggler(!toggler);
	};

	useEffect(() => {
		const last = handleLocation();
		setActiveLocation(last);
	}, []);

	return (
		<nav>
			<div className="left">
				<img src="synthetica.jpg" alt="Logo Synthetica" />
				<div
					className={toggler ? "hamburger active" : "hamburger"}
					onClick={handleToggler}
				>
					<span></span>
					<span></span>
					<span></span>
				</div>
			</div>
			<div className="right">
				<ul className={toggler ? "showList" : ""}>
					<li>
						<Link
							className={activeLocation == "home" ? "active" : ""}
						>
							Inicio
						</Link>
					</li>
					<li>
						<Link
							className={
								activeLocation == "conocenos" ? "active" : ""
							}
						>
							Conocenos
						</Link>
					</li>
					<li>
						<Link
							className={
								activeLocation == "proxima-fecha"
									? "active"
									: ""
							}
						>
							Próxima fecha
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Topbar;
