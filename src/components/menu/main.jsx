import React, { useState, useEffect } from "react";

export default function Index(props) {
	const handleClick = (e) => {
		if (props.section === e) {
			props.setIsActive(!props.isActive);
			return;
		}

		if (props.isActive === false) props.setIsActive(true);
		props.setSection(e);
		// props.setIsActive(!props.isActive);
	};

	return (
		<div
			className={`menu-container ${
				props.isActive ? "navigation" : ""
			} animate__animated animate__fadeIn animate__zoomIn animate__faster`}
		>
			<div
				className={`why-container ${
					props.section !== 0 && props.isActive ? "noactive" : ""
				} animate__animated animate__pulse`}
				onClick={() => handleClick(0)}
			>
				<span className="menu-item" id="why">
					Por que
				</span>
				<span className="menu-item" id="has">
					ha
				</span>{" "}
				<br />
				<span className="menu-item" id="diminished">
					disminuido
				</span>{" "}
				<br />
			</div>
			<span
				className={`menu-item ${props.isActive ? "noactive" : ""}`}
				id="the"
			>
				el consumo de
			</span>{" "}
			<br />
			<div
				className={`beer-container ${
					props.section !== 1 && props.isActive ? "noactive" : ""
				} animate__animated animate__pulse animate__delay-1s`}
				onClick={() => handleClick(1)}
			>
				<span className="menu-item" id="beer">
					cerveza
				</span>{" "}
				<br />
				<span className="menu-item" id="traditional">
					tradicional
				</span>{" "}
				<br />
			</div>
			<span
				className={`menu-item ${props.isActive ? "noactive" : ""}`}
				id="in"
			>
				en
			</span>
			<span
				className={`menu-item ${
					props.section !== 2 && props.isActive ? "noactive" : ""
				} animate__animated animate__pulse animate__duration-1.2s animate__delay-2s`}
				onClick={() => handleClick(2)}
				id="young"
			>
				jovenes
			</span>
			<div className="interrongation i-left">
				<span>¿</span>
			</div>
			<div className="interrongation i-right">
				<span>?</span>
			</div>
		</div>
	);
}
