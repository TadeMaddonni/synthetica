import React from "react";
import "./footer.scss";
import Instagram from "./icons/Instagram";
import Tiktok from "./icons/Tiktok";
import Spotify from "./icons/Spotify";
import Soundcloud from "./icons/Soundcloud";
import Youtube from "./icons/Youtube";
const Footer = () => {
	return (
		<footer>
			<div className="left">
				<a href="">
					<div>
						<span>Conocé la próxima fecha</span>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
						>
							<path fill="currentColor" d="m10 17l5-5l-5-5v10z" />
						</svg>
					</div>
				</a>
			</div>
			<div className="right">
				<ul>
					<li>
						<a href="">
							<Tiktok />
						</a>
					</li>
					<li>
						<a href="">
							<Instagram />
						</a>
					</li>
					<li>
						<a href="">
							<Spotify />
						</a>
					</li>
					<li>
						<a href="">
							<Soundcloud />
						</a>
					</li>
					<li>
						<a href="">
							<Youtube />
						</a>
					</li>
				</ul>
			</div>
		</footer>
	);
};

export default Footer;
