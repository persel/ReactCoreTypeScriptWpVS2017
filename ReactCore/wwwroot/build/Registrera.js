"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
class Registrera extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Leveransadress: "",
            Postnummer: "",
            Postadress: "",
            ValideringFelPostadress: false
        };
    }
    handleChange(event) {
        console.log(this);
        this.setState({
            ValideringFelPostadress: true
        });
    }
    render() {
        return (React.createElement("div", null,
            React.createElement("h2", null, "Registrera "),
            React.createElement("div", { className: "form-group" },
                React.createElement("label", { className: "control-label col-sm-2" }, "Postadress"),
                React.createElement("div", { className: "col-sm-10" },
                    React.createElement("input", { type: "text", id: "Postadress", value: this.state.Postadress, onChange: this.handleChange, className: "form-control" }),
                    this.state.ValideringFelPostadress ? React.createElement("span", null,
                        React.createElement("i", { className: "fa fa-exclamation-triangle fa-2x error", "aria-hidden": "true" }, " fel")) : null))));
    }
}
exports.Registrera = Registrera;
//# sourceMappingURL=Registrera.js.map