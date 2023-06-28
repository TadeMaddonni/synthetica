import React, { useState } from "react";
import Topbar from "../../components/topbar/Topbar";
import Hero from "../../components/home/Hero/Hero";
import Footer from "../../components/footer/Footer";
import Grid from "../../components/home/grid/Grid";

const Home = () => {
	return (
		<>
			<Topbar />
			<main style={{ minHeight: "100vh" }}>
				<Hero />
				<Grid />
			</main>
			<Footer />
		</>
	);
};

export default Home;
