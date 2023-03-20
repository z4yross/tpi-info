import React, { useState, useEffect } from "react";

export default function Section(props) {
	const [active, setActive] = useState(false);

    const capitalize = (s) => {
        if (typeof s !== 'string') return ''
        return s.charAt(0).toUpperCase() + s.slice(1)
    }

	return (
		// conditional className
		<div
			className={`section-empathymap-container`}
			onClick={() => setActive(!active)}
		>
			{!active ? (
				<div className="deactivated-card">
					<div className="title-card">
                        {capitalize(props.section)}
                    </div>					
				</div>
			) : (
				props.section
			)}
		</div>
	);
}
