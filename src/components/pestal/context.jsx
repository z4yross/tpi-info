import React, { useState, useEffect } from "react";

import {
	RiGovernmentFill,
	RiCoinsFill,
	RiTeamFill,
	RiHammerFill,
	RiLeafFill,
	RiBriefcase4Fill,
} from "react-icons/ri";

export default function Context() {
	const [active, setActive] = useState(false);

	const pestalData = [
		{
			title: "Politico",
			data: ["Dato 1", "Dato 2"],
			icon: <RiGovernmentFill />,
		},
		{
			title: "Economico",
			data: ["Dato 1", "Dato 2"],
			icon: <RiCoinsFill />,
		},
		{
			title: "Social",
			data: ["Dato 1", "Dato 2"],
			icon: <RiTeamFill />,
		},
		{
			title: "Tecnologico",
			data: ["Dato 1", "Dato 2"],
			icon: <RiHammerFill />,
		},
		{
			title: "Ambiental",
			data: ["Dato 1", "Dato 2"],
			icon: <RiLeafFill />,
		},
		{
			title: "Legal",
			data: ["Dato 1", "Dato 2"],
			icon: <RiBriefcase4Fill />,
		},
	];

	return (
		<div
			className={`context-container section ${
				active ? "grid-active" : ""
			}`}
			onClick={() => setActive(!active)}
		>
			{!active && "CONTEXTO"}
			{active && (
				<div className="context-content">
					{pestalData.map((pestalDataC, index) => {
						return (
							<div className="pestal-section-container">
								<div className="pestal-section-data">
									<p>{pestalDataC.data[0]}</p>
								</div>
								<div key={index} className="context-icon">
									{pestalDataC.icon}
								</div>
								<div className="pestal-section-data">
									<p>{pestalDataC.data[0]}</p>
								</div>
							</div>
						);
					})}
				</div>
			)}
		</div>
	);
}
