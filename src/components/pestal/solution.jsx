import React, { useState, useEffect } from "react";

export default function Solution(props) {
	const [active, setActive] = useState(false);

	return (
		<div
			className={`solution-container section ${active ? "grid-active" : ""}`}
			id={props.s_id}
			onClick={() => setActive(!active)}
		>
			{!active && `SOLUCION ${props.solution.s_id.charAt(1)}`}
			{active && (
				<div className={`solution-parraf-container ${active ? "solution-active" : ""}`}>
					<p>{props.solution.solution}</p>
				</div>
			)}
		</div>
	);
}
