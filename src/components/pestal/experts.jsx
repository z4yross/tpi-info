import React, { useState, useEffect } from "react";

import { AiOutlineRise } from "react-icons/ai";

export default function Experts() {
	const [active, setActive] = useState(false);

	const data = [
		{
			data: [
				"Precio adecuado al presupuesto de los jóvenes.",
				"Óscar Ruiz, Golden Gamber.",
			],
			icon: <AiOutlineRise size={5} />,
		},
		{
			data: [
				"Preferencia por cervezas artesanales y cocteles.",
				"Diego vargas, BBC Av. Esperanza.",
			],
			icon: <AiOutlineRise id="down-icon" />,
		},
		{
			data: [
				"Encerramiento de los jóvenes por la pandemia.",
				"Alejandra Fuentes, Primates Bar.",
			],
			icon: <AiOutlineRise id="down-icon" />,
		},
	];

	return (
		<div
			className={`experts-container context-container section ${
				active ? "grid-active" : ""
			}`}
			onClick={() => setActive(!active)}
		>
			{!active && "EXPERTOS"}
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
