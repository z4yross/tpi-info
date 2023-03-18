import React, { useState, useEffect } from "react";

import Index from "../components/index/main";
import Pestal from "../components/pestal/main";
import EmpathyMap from "../components/empatymap/main";
import ProblemTree from "../components/problemtree/main";

export default function Background(props){

    const current = [
        <Index />,
        <Pestal />,
        <EmpathyMap />,
        <ProblemTree />
    ]

    return (
        // <mesh>
        //     <planeGeometry args={[100, 100]} />
        //     <meshStandardMaterial color="white" />
        // </mesh>
        <div className="background-container">
            {current[props.background]}
        </div>
    );
}