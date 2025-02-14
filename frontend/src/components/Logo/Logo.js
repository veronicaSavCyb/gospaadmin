import React from 'react';
export default function Logo({ width, height, style, className = '' }) {
    const styles = { width, height, display: 'inline-block', ...style };
    return (React.createElement("div", { style: styles, className: `rsuite-logo logo-animated logo-animated-delay-half-seconds bounce-in ${className} ` },
        React.createElement("svg", { viewBox: "0 0 120 138", version: "1.1", xmlns: "http://www.w3.org/2000/svg", width: "100%", height: "100%", preserveAspectRatio: "xMidYMin slice" },
            React.createElement("title", null, "React Suite"),
            React.createElement("defs", null,
                React.createElement("linearGradient", { x1: "71.5906675%", y1: "12.5658792%", x2: "45.577567%", y2: "114.749969%", id: "linearGradient-1" },
                    React.createElement("stop", { stopColor: "#6594ED", offset: "0%" }),
                    React.createElement("stop", { stopColor: "#316BD9", offset: "100%" })),
                React.createElement("linearGradient", { x1: "67.6269531%", y1: "0%", x2: "50%", y2: "78.0639648%", id: "linearGradient-2" },
                    React.createElement("stop", { stopColor: "#EC5060", offset: "0%" }),
                    React.createElement("stop", { stopColor: "#EA7480", offset: "100%" })),
                React.createElement("linearGradient", { x1: "67.6269531%", y1: "0%", x2: "50%", y2: "79.2449951%", id: "linearGradient-3" },
                    React.createElement("stop", { stopColor: "#EC5060", offset: "0%" }),
                    React.createElement("stop", { stopColor: "#EA7480", offset: "100%" }))),
            React.createElement("g", { id: "Page-1", stroke: "none", strokeWidth: "1", fill: "none", fillRule: "evenodd" },
                React.createElement("g", { id: "Group-22", transform: "translate(3.000000, 6.000000)" },
                    React.createElement("polyline", { className: "polyline-axis", stroke: "url(#linearGradient-1)", strokeWidth: "12", strokeLinecap: "round", strokeLinejoin: "round", points: "111 31 57 0 19 22 95 104 57 126 3 95" }),
                    React.createElement("polyline", { className: "polyline-limb", id: "Path-5-Copy-7", stroke: "url(#linearGradient-2)", strokeWidth: "12", strokeLinecap: "round", strokeLinejoin: "round", transform: "translate(22.000000, 63.000000) scale(-1, -1) translate(-22.000000, -63.000000) ", points: "41 31 3 54 41 95 41 52" }),
                    React.createElement("polyline", { className: "polyline-limb", stroke: "url(#linearGradient-3)", strokeWidth: "12", strokeLinecap: "round", strokeLinejoin: "round", points: "111 31 73 54 111 95 111 52" }),
                    React.createElement("circle", { className: "circle", fill: "#6594ED", cx: "3", cy: "95", r: "3" }),
                    React.createElement("circle", { fill: "#6594ED", cx: "111", cy: "31", r: "3" }))))));
}
//# sourceMappingURL=Logo.js.map