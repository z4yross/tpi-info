import React, { useState } from "react";

function Arc(props) {
	const [hovered, hover] = useState(false);
	const [clicked, click] = useState(false);

	return (
		<mesh
			{...props}
			onPointerOver={(event) => hover(true)}
			onPointerOut={(event) => hover(false)}
			onClick={(event) => props.setBackground(props.arcThetaStartIndex + 1)}
		>
			<cylinderGeometry
				args={[
					props.arcRadius,
					props.arcRadius,
					props.arcHeight,
					props.arcSegments,
					1,
					props.arcOpenEnded,
					((2 * Math.PI) / props.arcTotalDivisions) *
						props.arcThetaStartIndex,
					(2 * Math.PI) / props.arcTotalDivisions,
				]}
			/>
			<meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
		</mesh>
	);
}

export default function Banner(props) {
	const [color, setColor] = useState("red");
	// const texture = useLoader(THREE.TextureLoader, "/texture.jpg");

	return (
		<mesh
			{...props}
			// 	onClick={() => setColor("blue")}
			// 	onPointerOver={() => setColor("orange")}
			// 	onPointerOut={() => setColor("hotpink")}
		>
			{Array.from(Array(3).keys()).map((i) => {
				return (
					<Arc
                        key={i}
						arcRadius={1}
						arcHeight={2.65}
						arcSegments={32}
						arcOpenEnded={true}
						arcTotalDivisions={3}
						arcThetaStartIndex={i}
						setBackground={props.setBackground}
					/>
				);
			})}
		</mesh>
	);
}
