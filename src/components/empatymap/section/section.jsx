import React, { useState, useEffect } from "react";

export default function Section(props){
    return (
        // conditional className
        <div className={`section-empathymap-container ${props.section === "thinks" ? "double": ""}`}>
            {props.section}
        </div>
    );
}