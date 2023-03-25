import React, { useState, useEffect } from "react";

export default function Experts() {
	const [active, setActive] = useState(false);

	return (
		<div
			className={`experts-container section ${active ? "grid-active" : ""}`}
			onClick={() => setActive(!active)}
		>
            {!active && "EXPERTOS"}
        </div>
	);
}
