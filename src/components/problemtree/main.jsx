import React, { useState, useEffect, useRef } from "react";

export default function ProblemTree() {
	const ref = useRef(null);

	useEffect(() => {
		const iframe = ref.current;
		const iframeDocument = iframe.contentDocument;
		const iframeHeadElem = iframeDocument.head;
		const iframeBodyElem = iframeDocument.body;

		// inject css into iframe head

		const linkElem = iframeDocument.createElement("link");
		linkElem.setAttribute("type", "text/css");
		linkElem.setAttribute("rel", "stylesheet");
		linkElem.setAttribute("href", "/tpi-info/css/iframe.css");
		iframeHeadElem.appendChild(linkElem);

		// get linked css from iframe head

		const iframeHeadStyles = iframeHeadElem.querySelector("link");
		console.log(iframeHeadStyles);
	}, [ref]);

	return (
		<div className="problemtree-container">
			<iframe
                ref={ref}
				src="https://lookerstudio.google.com/embed/reporting/124a4777-6b5c-40b2-b476-cc995213592a/page/9jZJD"
                className="pt-iframe"
			></iframe>
		</div>
	);
}
