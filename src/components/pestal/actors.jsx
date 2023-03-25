import React, { useState, useEffect } from "react";

export default function Actors() {
	const [active, setActive] = useState(false);

	return (
		<div
			className={`actors-container section ${active ? "grid-active" : ""}`}
			onClick={() => setActive(!active)}
		>
            {!active && "ACTORES"}

        </div>
	);
}
