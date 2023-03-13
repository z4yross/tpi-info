import React, { useRef, useState, useEffect } from "react";
import { useLoader } from "@react-three/fiber";
import { ObjectLoader, MeshStandardMaterial } from "three";

export default function Can(props) {
	const ref = useRef();

	const object = useLoader(ObjectLoader, "/model.json");

	const [hovered, hover] = useState(false);

	// replace material of all meshes in the object with a new material

	const meshNodes = [];
	object.traverse((node) => {
		if (node.isMesh) {
			node.material = new MeshStandardMaterial({ color: "orange" });
			meshNodes.push(node);
		}
	});

	if (hovered) {
		meshNodes.forEach((meshNode) => {
			console.log(meshNode);
			meshNode.material.color.set("hotpink");
		});
	} else {
		meshNodes.forEach((meshNode) => {
			meshNode.material.color.set("orange");
		});
	}

	// useEffect(() => {
	// 	console.log(hovered);
	// }, [hovered]);

	// useEffect(() => {
	// 	console.log(object);
	// }, [object]);

	return (
		<primitive
			{...props}
			ref={ref}
			scale={0.3}
			// onPointerOver={(event) => hover(true)}
			// onPointerOut={(event) => hover(false)}
			// onClick={(event) => console.log(event)}
			object={object}
		></primitive>
	);
}
