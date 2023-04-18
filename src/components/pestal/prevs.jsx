import React, { useState, useEffect } from "react";
import img1 from "../../assets/images/prevs/1.jpeg";
import img2 from "../../assets/images/prevs/2.jpeg";
import img3 from "../../assets/images/prevs/3.jpeg";
import img4 from "../../assets/images/prevs/4.jpeg";
import img5 from "../../assets/images/prevs/5.jpeg";
import img6 from "../../assets/images/prevs/6.jpeg";


export default function Prevs(props) {
	const [active, setActive] = useState(false);

	const prevs = [ img1, img2, img3, img4, img5, img6 ];

	return (
		<div
			className={`prevs-container section ${active ? "grid-active" : ""}`}
			onClick={() => setActive(!active)}
		>
			
			{!active && `ANTECEDENTES`}
			{active && (
				<div className="prevs-active-container">
					{prevs.map((prev, i) => (
						<div className="prevs-img-container">
							<img src={prev} alt={`prev${i}`} />
						</div>
					))}
				</div>
			)}
		</div>
	);
}
