import React, { useState, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useScroll } from "@react-three/drei";

function Arc(props) {
	const [hovered, hover] = useState(false);
	const [clicked, click] = useState(false);

	return (
		<mesh
			{...props}
			onPointerOver={(event) => hover(true)}
			onPointerOut={(event) => hover(false)}
			onClick={(event) => props.activateSection(props.arcThetaStartIndex)}
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
	const [current, setCurrent] = useState(0);

	const ref = useRef();
	const scroll = useScroll();
	// const texture = useLoader(THREE.TextureLoader, "/texture.jpg");

	const map = (value, istart, istop, ostart, ostop) => {
		return (
			ostart + (ostop - ostart) * ((value - istart) / (istop - istart))
		);
	};

	const toAngle = (i, sections) => {
		return (i / sections) * 2 * Math.PI - (1 / sections) * Math.PI;
	};

	const sections = 3;
	// let current = 0;
	const initialRotation = 0;

	useState(() => {
	}, [current]);

	const activateSection = (i) => {
		console.log("current:", current);
		console.log("i:", i);

		
		const currentScroll = current / sections;
		const offsetScroll = scroll.scroll.current;
		const targetScroll = i / sections;

		props.setBackground(i + 1);

		
		// props.setBackground(i + 1);

		// if (i === current) return;
		// if (i > current) {
		// 	console.log("greater than:", i > current);
		// 	console.log("right", i - current);
		// 	console.log("left", sections - i + current);
		// 	if (targetScroll - currentScroll < 1 - targetScroll + currentScroll) {
		// 		console.log("right");
		// 		scroll.scroll.current -= targetScroll - currentScroll;
		// 	} else {
		// 		console.log("left");
		// 		scroll.scroll.current += 1 - targetScroll + currentScroll;
		// 	}
		// } else {
		// 	console.log("less than:", i < current);
		// 	console.log("left", current - i);
		// 	console.log("right", sections - current + i);
		// 	if (currentScroll - targetScroll < 1 - currentScroll + targetScroll) {
		// 		console.log("left");
		// 		scroll.scroll.current += currentScroll - targetScroll;
		// 	} else {
		// 		console.log("right");
		// 		scroll.scroll.current -= 1 - currentScroll + targetScroll;
		// 	}
		// }

		// setCurrent(i);
		// console.log("scroll:", scroll.scroll.current);
		// console.log("current:", current);
	};

	useFrame((state, delta) => {
		// ref.current.rotation.y =
		// 	toAngle(initialRotation, sections) + scroll.offset * (2 * Math.PI);

		for (let i = 0; i < sections; i++) {
			if ( scroll.visible(i * (1 / sections), (i + 1) * (1 / sections)) ) {
				const offset = scroll.range(i * (1 / sections), (i + 1) * (1 / sections));

				console.log("offset:", offset);


				ref.current.rotation.y = offset;
			}
		}
	});

	return (
		<mesh
			{...props}
			ref={ref}
			// rotation={[0, 0.1713 * 2 * Math.PI, 0]}
			// 	onClick={() => setColor("blue")}
			// 	onPointerOver={() => setColor("orange")}
			// 	onPointerOut={() => setColor("hotpink")}
		>
			{Array.from(Array(sections).keys()).map((i) => {
				return (
					<Arc
						key={i}
						arcRadius={1}
						arcHeight={2.65}
						arcSegments={32}
						arcOpenEnded={true}
						arcTotalDivisions={3}
						arcThetaStartIndex={i}
						activateSection={activateSection}
						// setBackground={props.setBackground}
					/>
				);
			})}
		</mesh>
	);
}
