import React from "react";
import "./grid.scss";

const Grid = () => {
	return (
		<div className="gridSection">
			<div className="gridContainer">
				<div className="card card1">
					<div className="content">
						<p>Episode</p>
						<span>001</span>
					</div>
				</div>
				<div className="card card2">
					<div className="content">
						<p>Episode</p>
						<span>002</span>
					</div>
				</div>
				<div className="card card3">
					<div className="content">
						<p>Coming soon</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Grid;
