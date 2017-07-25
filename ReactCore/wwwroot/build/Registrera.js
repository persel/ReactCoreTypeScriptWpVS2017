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
        console.log(event.target.value);
        const tempState = this.state;
        tempState[event.target.id] = event.target.value;
        this.setState(tempState);
    }
    spara(e) {
    }
    render() {
        return (React.createElement("div", null,
            React.createElement("h2", null, "Registrera"),
            React.createElement("fieldset", null,
                React.createElement("form", { className: "form-horizontal", onSubmit: this.spara.bind(this) },
                    React.createElement("div", { className: "form-group" },
                        React.createElement("label", { className: "control-label col-sm-2" }, " Leveransadress"),
                        React.createElement("div", { className: "col-sm-10" },
                            React.createElement("input", { type: "text", id: "Leveransadress", value: this.state.Leveransadress, onChange: this.handleChange.bind(this), className: "form-control" }))),
                    React.createElement("div", { className: "form-group" },
                        React.createElement("label", { className: "control-label col-sm-2" }, " Postnummer"),
                        React.createElement("div", { className: "col-sm-10" },
                            React.createElement("input", { type: "text", id: "Postnummer", value: this.state.Postnummer, onChange: this.handleChange.bind(this), className: "form-control" }))),
                    React.createElement("div", { className: "form-group" },
                        React.createElement("label", { className: "control-label col-sm-2" }, " Postadress"),
                        React.createElement("div", { className: "col-sm-10" },
                            React.createElement("input", { type: "text", id: "Postadress", value: this.state.Postadress, onChange: this.handleChange.bind(this), className: "form-control" }),
                            this.state.ValideringFelPostadress ? React.createElement("span", null,
                                React.createElement("i", { "aria-hidden": "true" }, " fel")) : null)),
                    React.createElement("div", { className: "form-group" },
                        React.createElement("button", { type: "submit", className: "btn btn-success btn-primary glyphicon-envelope margin-left12" }, " Spara "))))));
    }
}
exports.Registrera = Registrera;
//# sourceMappingURL=Registrera.js.map