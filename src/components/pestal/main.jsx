import React, { useState, useEffect } from "react";

import Solution from "./solution";
import Context from "./context";
import Actors from "./actors";
import Experts from "./experts";

export default function Pestal() {
	const solutions = [
		{
			s_id: "s1",
			solution: (
				<p>
					<span>Crear un nuevo modelo de ventas</span>
					y un nuevo producto, ambos
					centrados en la experiencia, pues hemos logrado identificar
					una tendencia juvenil hacia lo nuevo, esta nueva bebida debe
					tener un sabor que sea atractivo para ellos (esto podría
					conseguirse con sabores añadidos) y también debe ser lo más
					barata posible, de manera que sea asequible para gran parte
					del público objetivo.
				</p>
			),
		},
		{
			s_id: "s2",
			solution: (
				<p>
					<span>Producir campañas publicitarias</span>
					que mejoren la percepción del nombre de las cervezas
					tradicionales existentes hacia el público objetivo.
				</p>
			),
		},
		{
			s_id: "s3",
			solution: (
				<p>
					<span>Adjuntar la cadena BBC</span> a la venta de cervezas
					tradicionales para impulsar las ventas en este público (ya
					que gran parte de este visita estos establecimientos).
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
			</div>
		</div>
	);
}
