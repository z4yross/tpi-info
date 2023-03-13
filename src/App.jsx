import React, { useRef, useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import "./assets/styles/main.scss";

import { createRoot } from "react-dom/client";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";

import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

import { ObjectLoader } from "three";

import { OrbitControls, Loader, useFBX } from "@react-three/drei";

function Can(props) {
	const ref = useRef();

	const object = useLoader(ObjectLoader, "/model.json");

	const [hovered, hover] = useState(false);

	const meshNodes = [];
	object.traverse((node) => {
		if (node.isMesh) {
			meshNodes.push(node);
		}
	});

	if (hovered) {
		meshNodes.forEach((meshNode) => {
			meshNode.material.color.set("hotpink");
		});
	} else {
		meshNodes.forEach((meshNode) => {
			meshNode.material.color.set("orange");
		});
	}

	useEffect(() => {
		console.log(hovered);
	}, [hovered]);

	useEffect(() => {
		console.log(object);
	}, [object]);

	return (
		<primitive
			{...props}
			ref={ref}
			scale={0.3}
			onPointerOver={(event) => hover(true)}
			onPointerOut={(event) => hover(false)}
			onClick={(event) => console.log(event)}
			object={object}
		>
		</primitive>
	);
}

function App() {
	return (
		<>
			<Canvas>
				<ambientLight intensity={0.3} />
				<spotLight position={[10, 10, 10]} angle={0.15} penumbra={2} />
				<pointLight position={[-10, -10, -10]} />
				<Can position={[0, 0, 0]} />
				<OrbitControls />
			</Canvas>
			<Loader />
		</>
	);
}

export default App;
