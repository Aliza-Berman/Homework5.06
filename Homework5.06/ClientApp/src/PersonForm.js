import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class PersonForm extends React.Component {
    render() {
        return (
            <div className="row" style={{ marginBottom: 10 }}> 
                <div className="col-md-2">
                    <input
                        onChange={this.props.handleFirstName}
                        value={this.props.firstNameVal}
                        className="form-control"
                        placeholder="First Name"
                        type="text" />
                </div>
                <div className="col-md-2">
                    <input
                        onChange={this.props.handleLastName}
                        value={this.props.lastNameVal}
                        className="form-control"
                        placeholder="Last Name"
                        type="text" />
                </div>
                <div className="col-md-2">
                    <input
                        onChange={this.props.handleAge}
                        value={this.props.ageVal}
                        className="form-control"
                        placeholder="Age"
                        type="text" />
                </div>
               <div className="col-md-2">
                    <button
                        className="btn btn-primary btn-block"
                        onClick={this.props.onAddClick}
                    >Add</button>
                </div>
                <div className="col-md-2">
               
                    <button
                        className="btn btn-success btn-block"
                        onClick={this.props.onClearClick}
                    >Clear</button>
                </div>
            </div>
        );
    }
}
export default PersonForm;