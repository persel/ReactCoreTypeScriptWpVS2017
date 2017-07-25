"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
// 'HelloProps' describes the shape of props.
// State is never set so we use the 'undefined' type.
class Hello extends React.Component {
    render() {
        return React.createElement("h1", null,
            "Hello from ",
            this.props.compiler,
            " and ",
            this.props.framework,
            "!");
    }
}
exports.Hello = Hello;
//# sourceMappingURL=Hello.js.map