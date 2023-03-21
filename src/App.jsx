import React, { useRef, useState, useEffect } from "react";
import "./assets/styles/main.scss";

import Index from "./components/index/main";
import Pestal from "./components/pestal/main";
import EmpathyMap from "./components/empatymap/main";
import ProblemTree from "./components/problemtree/main";

import Menu from "./components/menu/main";

import "animate.css";

import empBg from "./assets/images/emp-bg.jpg";
import unal from "./assets/images/logo-unal.png";
import tpi from "./assets/images/logo-tpi.png";


function App() {
	const [background, setBackground] = useState(0);

	const current = [<ProblemTree />, <Pestal />, <EmpathyMap bg={empBg} />];

	const [isActive, setIsActive] = useState(false);
	const [section, setSection] = useState(2);

	return (
		<div className="main-container">
			<div
				className={`menu-wrapper${isActive ? " active-mn" : ""} smooth`}
			>
				<div
					className={`logos-wrapper ${
						isActive ? " active-at" : ""
					} smooth`}
				>	
					<img src={unal} alt="unal" />
					<img src={tpi} alt="tpi" />
				</div>

				<Menu
					isActive={isActive}
					setIsActive={setIsActive}
					section={section}
					setSection={setSection}
				/>

				<div
					className={`authors-wrapper ${
						isActive ? " active-at" : ""
					} smooth`}
				>
					<div className="authors">
						<div>Andres Camilo Correa Romero</div>
						<div>Juan Camilo Guerrero Paredes</div>
						<div>Juan Jose Herrera Rodriguez</div>
						<div>Juan Manuel Correa Lombana</div>
						<div>Giovanni Andres Paez Ujueta</div>
						<div>Santiago Cadena Alvarez</div>
					</div>

					{/* <div className="separator"></div> */}

					<div className="unal">
						<div>Universidad Nacional de Colombia</div>
						<div>Facultad de Ingenieria</div>
						<div>Taller de proyectos interdiciplinarios</div>
						<div>2023-1</div>
					</div>
				</div>
			</div>
			<div
				className={`section-wrapper${isActive ? " active" : ""} smooth`}
			>
				{section === 0 && <ProblemTree />}
				{section === 1 && <Pestal />}
				{section === 2 && <EmpathyMap bg={empBg} />}
			</div>
		</div>
	);
}

export default App;
