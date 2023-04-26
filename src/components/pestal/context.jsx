import React, { useState, useEffect } from "react";

import ods3 from "../../assets/images/ods-fill/S-WEB-Goal-03.png";
import ods12 from "../../assets/images/ods-fill/S-WEB-Goal-12.png";
import ods17 from "../../assets/images/ods-fill/S-WEB-Goal-17.png";

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

	const ods = [
		{
			ods: ods3,
			color: "#4c9f38",
		},
		{
			ods: ods12,
			color: "#bf8b2e",
		},
		{
			ods: ods17,
			color: "#19486a",
		},
	];

	const pestalData = [
		{
			title: "Político",
			data: [
				"Impuestos sobre bebidas alcohólicas.",
				"Regulación de publicidad de bebidas.",
			],
			icon: <RiGovernmentFill />,
		},
		{
			title: "Económico",
			data: [
				"Desaceleración económica o recesión.",
				"Cambios en los hábitos de consumo.",
			],
			icon: <RiCoinsFill />,
		},
		{
			title: "Social",
			data: [
				"Cambios en las preferencias de bebidas alcohólicas.",
				"Cambio en la cultura del consumo de alcohol.",
			],
			icon: <RiTeamFill />,
		},
		{
			title: "Tecnológico",
			data: [
				"Redes sociales impactan consumo.",
				"Innovación en producción y diseño.",
			],
			icon: <RiHammerFill />,
		},
		{
			title: "Ambiental",
			data: [
				"Sostenibilidad y medio ambiente.",
				"Preferencia por marcas sostenibles.",
			],
			icon: <RiLeafFill />,
		},
		{
			title: "Legal",
			data: [
				"Decreto 1686 - Clasificación de bebidas alcohólicas.",
				"Decreto 1826 - Requisitos legales para su elaboración y comercialización.",
			],
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
				<div
					className="context-content-container"
					style={{ height: "60%" }}
				>
					<div className="ods-container">
						{ods.map((od, index) => {
							return (
								<div
									className="ods"
									key={index}
									style={{ backgroundColor: od.color }}
								>
									<img src={od.ods} alt={`ods${index}`} />
								</div>
							);
						})}
					</div>
					<div className="context-content">
						{pestalData.map((pestalDataC, index) => {
							return (
								<div
									className="pestal-section-container"
									key={index}
								>
									<div className="pestal-section-data">
										<p>{pestalDataC.data[0]}</p>
									</div>
									<div className="context-icon">
										{pestalDataC.icon}
									</div>
									<div className="pestal-section-data">
										<p>{pestalDataC.data[1]}</p>
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
