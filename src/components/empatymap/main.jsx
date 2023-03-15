import React, { useState, useEffect } from "react";

import Section from "./section/section.jsx";

export default function EmpathyMap(){

    const sections = [
        "hears",
        "thinks",
        "hurts",
        "says",
        "wonders",
    ];

    return (
        <div className="empathymap-container">
            {sections.map((section, index) => {
                return (
                    <Section
                        key={index}
                        section={section}
                    />
                );
            })}
        </div>
    );
}