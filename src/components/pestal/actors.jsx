import React, { useState, useEffect } from "react";

import bavaria from "../../assets/images/bavaria.png";
import { RiTeamFill, RiGovernmentFill } from "react-icons/ri";
import tpi from "../../assets/images/logo-tpi.png";
import { GiTeamDowngrade } from "react-icons/gi";

export default function Actors() {
	const [active, setActive] = useState(false);

	const data = [
		{
			data: ["Bavaria", "10"],
			icon: <img src={bavaria} alt="bavaria" />,
		},
		{
			data: ["Equipo de trabajo", "8"],
			icon: <RiTeamFill />,
		},
		{
			data: ["Jovenes", "6"],
			icon: <GiTeamDowngrade />,
		},
		{
			data: ["Mentora", "6"],
			icon: <img src={tpi} alt="tpi" />,
		},
		{
			data: ["gobierno", "6"],
			icon: <RiGovernmentFill />,
		},
	];

	return (
		<div
			className={`actors-container context-container section ${
				active ? "grid-active" : ""
			}`}
			onClick={() => setActive(!active)}
		>
			{!active && "PARTES INTERESADAS"}
			{active && (
				<div className="context-content-container">
					<div className="context-content">
						{data.map((dat, index) => {
							return (
								<div
									className="pestal-section-container"
									key={index}
								>
									<div className="pestal-section-data">
										<p>{dat.data[0]}</p>
									</div>
									<div className="context-icon">
										{dat.icon}
									</div>
									<div className="pestal-section-data">
										<p>{dat.data[1]}</p>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			)}
		</div>
	);
}
