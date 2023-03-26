import React, { useState, useEffect } from "react";

export default function Actors() {
	const [active, setActive] = useState(false);

	const data = [
		{
			data: ["data1", "data2"],
			icon:"",
		},
		{
			data: ["data1", "data2"],
			icon: "",
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
								<div className="context-icon">{dat.icon}</div>
								<div className="pestal-section-data">
									<p>{dat.data[1]}</p>
								</div>
							</div>
						);
					})}
				</div>
			)}
		</div>
	);
}
