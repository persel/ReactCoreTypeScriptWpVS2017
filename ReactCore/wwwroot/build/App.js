"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const ReactDOM = require("react-dom");
const react_router_dom_1 = require("react-router-dom");
const Registrera_1 = require("./Registrera");
const Oversikt_1 = require("./Oversikt");
const Help_1 = require("./Help");
ReactDOM.render(React.createElement(react_router_dom_1.BrowserRouter, null,
    React.createElement("div", null,
        React.createElement("nav", { className: "navbar navbar-inverse" },
            React.createElement("div", { className: "container-fluid" },
                React.createElement("div", { className: "navbar-header" },
                    React.createElement("button", { type: "button", className: "navbar-toggle", "data-toggle": "collapse", "data-target": "#myNavbar" },
                        React.createElement("span", { className: "icon-bar" }),
                        React.createElement("span", { className: "icon-bar" }),
                        React.createElement("span", { className: "icon-bar" })),
                    React.createElement("a", { className: "navbar-brand", href: "#" },
                        React.createElement("i", { className: "fa fa-home fa-fw", "aria-hidden": "true" }))),
                React.createElement("div", { className: "collapse navbar-collapse", id: "myNavbar" },
                    React.createElement("ul", { className: "nav navbar-nav" },
                        React.createElement("li", null,
                            React.createElement(react_router_dom_1.Link, { to: "/", className: "active" }, "Hem")),
                        React.createElement("li", null,
                            React.createElement(react_router_dom_1.Link, { to: "/registrera", className: "active" }, "Registrera")),
                        React.createElement("li", null,
                            React.createElement(react_router_dom_1.Link, { to: "/oversikt", className: "active" }, "\u00D6versikt")),
                        React.createElement("li", null,
                            React.createElement(react_router_dom_1.Link, { to: "/help", className: "active" }, "Hj\u00E4lp")))))),
        React.createElement("div", null,
            React.createElement(react_router_dom_1.Route, { exact: true, path: "/", component: Registrera_1.Registrera }),
            React.createElement(react_router_dom_1.Route, { path: "/Registrera", component: Registrera_1.Registrera }),
            React.createElement(react_router_dom_1.Route, { path: "/Oversikt", component: Oversikt_1.Oversikt }),
            React.createElement(react_router_dom_1.Route, { path: "/help", component: Help_1.Help })))), document.getElementById('app'));
//# sourceMappingURL=App.js.map