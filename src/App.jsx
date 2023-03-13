import React, { useRef, useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import "./assets/styles/main.scss";

import { createRoot } from "react-dom/client";

import { Canvas } from "@react-three/fiber";

import { OrbitControls, Loader } from "@react-three/drei";

import Can from "./components/can";
import Banner from "./components/banner";

function App() {
	return (
		<>
			<Canvas>
				<ambientLight intensity={0.3} />
				<spotLight position={[10, 10, 10]} angle={0.15} penumbra={2} />
				<pointLight position={[-10, -10, -10]} />
				<Can position={[0, -1.6, 0]} />
        <Banner position={[0, 0, 0]} />
				<OrbitControls />
			</Canvas>
			<Loader />
		</>
	);
}

export default App;
