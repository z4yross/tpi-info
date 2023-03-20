import React, { useState, useEffect } from "react";

import Section from "./section/section.jsx";

export default function EmpathyMap(props) {
	const sections = [
		"ven",
		"escuchan",
		"hablan",
		"sienten",
		"piensan",
		"aspiran",
	];

	return (
		<div className="empathymap-container">
			<div className="emp-grid">
				{sections.map((section, index) => {
					return <Section key={index} section={section} />;
				})}
			</div>
			{/* <div className="emp-title">
				<h1>JOVENES</h1>
			</div> */}
			<img src={props.bg} alt="bg" className="empathymap-bg" />
		</div>
	);
}
