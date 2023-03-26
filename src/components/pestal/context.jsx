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
			data: ["Impuestos sobre bebidas alcohólicas.", "Regulación de publicidad de bebidas."],
			icon: <RiGovernmentFill />,
		},
		{
			title: "Economico",
			data: ["Desaceleración económica o recesión.", "Cambios en los hábitos de consumo."],
			icon: <RiCoinsFill />,
		},
		{
			title: "Social",
			data: ["Cambios en las preferencias de bebidas alcohólicas.", "Cambio en la cultura del consumo de alcohol."],
			icon: <RiTeamFill />,
		},
		{
			title: "Tecnologico",
			data: ["Redes sociales impactan consumo", "Innovación en producción y diseño"],
			icon: <RiHammerFill />,
		},
		{
			title: "Ambiental",
			data: ["Sostenibilidad y medio ambiente.", "Preferencia por marcas sostenibles."],
			icon: <RiLeafFill />,
		},
		{
			title: "Legal",
			data: ["Decreto 1686 - Clasificación de bebidas alcohólicas", "Decreto 1826 - Requisitos legales para su elaboración y comercialización."],
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
							<div className="pestal-section-container"  key={index}>
								<div className="pestal-section-data">
									<p>{pestalDataC.data[0]}</p>
								</div>
								<div className="context-icon">
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
