import React, { useRef, useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import "./assets/styles/main.scss";

import { createRoot } from "react-dom/client";

import { Canvas } from "@react-three/fiber";

import { OrbitControls, Loader } from "@react-three/drei";

import Can from "./components/can";
import Banner from "./components/banner";
import Background from "./components/background";

function App() {

	const [background, setBackground] = useState(0);

	return (
		<div className="main-container">
			<Background background={background} />
			<Canvas>
				<ambientLight intensity={0.3} />
				<spotLight position={[10, 10, 10]} angle={0.15} penumbra={2} />
				<pointLight position={[-10, -10, -10]} />
				<Can position={[0, -1.6, 0]} setBackground={setBackground} />
				<Banner position={[0, 0, 0]} setBackground={setBackground} />
				<OrbitControls />
			</Canvas>
			<Loader />
		</div>
	);
}

export default App;
