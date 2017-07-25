import * as React from "react";

export interface IAppProps { string}
export interface IAppState { Leveransadress: string; Postnummer: string; Postadress: string; ValideringFelPostadress: boolean }

export class Registrera extends React.Component<IAppProps, IAppState> {
    
    state: IAppState;

    constructor(props: IAppProps) {
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

    render() {
      
        return (
            <div>
                <h2>Registrera </h2>
                <div className="form-group">
                    <label className="control-label col-sm-2"> Leveransadress</label>
                    <div className="col-sm-10">
                        <input type="text" id="Leveransadress" value={this.state.Leveransadress} onChange={this.handleChange.bind(this)} className="form-control" />
                    </div>
                </div>
                <br />
                <div className="form-group">
                    <label className="control-label col-sm-2"> Postnummer</label>
                    <div className="col-sm-10">
                        <input type="text" id="Postnummer" value={this.state.Postnummer} onChange={this.handleChange.bind(this)} className="form-control" /> 
                    </div>
                </div>
                <br />
                <div className="form-group">
                    <label className="control-label col-sm-2"> Postadress</label>
                    <div className="col-sm-10">
                        <input type="text" id="Postadress"  value={this.state.Postadress} onChange={this.handleChange.bind(this)} className="form-control" />
                        {this.state.ValideringFelPostadress ? <span ><i aria-hidden="true"> fel</i></span> : null}
                    </div>
                </div>
            </div>
        );
    }
}