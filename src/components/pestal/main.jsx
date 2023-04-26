import React, { useState, useEffect } from "react";

import Solution from "./solution";
import Context from "./context";
import Actors from "./actors";
import Experts from "./experts";
import Prevs from "./prevs";

export default function Pestal() {
	const solutions = [
		{
			s_id: "s1",
			solution: (
				<p>
					<span>Códigos QR en etiquetas o tapa</span> dirigirán a
					usuarios a juegos interactivos, fomentando conversación y
					aumentando interés en nuestras cervezas.
				</p>
			),
		},
		{
			s_id: "s2",
			solution: (
				<p>
					<span>Códigos QR exclusivos en eventos</span> conectarán a
					asistentes con actividades y promociones especiales,
					mejorando la representatividad en el público joven.
				</p>
			),
		},
		{
			s_id: "s3",
			solution: (
				<p>
					<span> Redistribución enfocada en cervezas artesanales </span>
					a nivel nacional, reduciendo costos de producción y
					transporte, y adaptándonos a las preferencias actuales de
					los jóvenes.
				</p>
			),
		},
	];

	return (
		<div className="pestal-container">
			<div className="pestal-grid">
				<Context />
				<Solution solution={solutions[0]} />
				<Solution solution={solutions[1]} />
				<Actors />
				<Solution solution={solutions[2]} />
				<Experts />
				<Prevs />
			</div>
		</div>
	);
}
