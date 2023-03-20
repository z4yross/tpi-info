import React, { useRef, useState, useEffect } from "react";
import "./assets/styles/main.scss";

import Index from "./components/index/main";
import Pestal from "./components/pestal/main";
import EmpathyMap from "./components/empatymap/main";
import ProblemTree from "./components/problemtree/main";

import Menu from "./components/menu/main";

import "animate.css";

import empBg from "./assets/images/emp-bg.jpg";

function App() {
	const [background, setBackground] = useState(0);

	const current = [<Pestal />, <ProblemTree />, <EmpathyMap bg={empBg}/>];

	const [isActive, setIsActive] = useState(false);
	const [section, setSection] = useState(0);

	return (
		<div className="main-container">
			<div
				className={`menu-wrapper${isActive ? " active-mn" : ""} smooth`}
			>
				<Menu
					isActive={isActive}
					setIsActive={setIsActive}
					section={section}
					setSection={setSection}
				/>
			</div>
			<div
				className={`section-wrapper${isActive ? " active" : ""} smooth`}
			>
				{current[section]}
			</div>
		</div>
	);
}

export default App;
