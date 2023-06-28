import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Welcoming from "./components/welcome/Welcoming";
import Home from "./pages/home/Home";

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route index path="/" element={<Welcoming />}></Route>
					<Route path="/home" element={<Home />}></Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
