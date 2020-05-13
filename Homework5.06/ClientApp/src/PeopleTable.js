import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import PersonForm from './PersonForm';
import PersonRow from './PersonRow';

class PeopleTable extends React.Component {

    state = {
        people: [],
        person: {
            firstName: '',
            lastName: '',
            age: ''
        }
    }
    handleFirstName = e => {
        const personCopy = { ...this.state.person };
        personCopy.firstName = e.target.value;
        this.setState({ person: personCopy });
    }
    handleLastName = e => {
        const personCopy = { ...this.state.person };
        personCopy.lastName = e.target.value;
        this.setState({ person: personCopy });
    }
    handleAge = e => {
        const personCopy = { ...this.state.person };
        personCopy.age = e.target.value;
        this.setState({ person: personCopy });
    }
    onAddClick = () => {
        const peopleCopy = [...this.state.people];
        const person = {
            firstName: this.state.person.firstName,
            lastName: this.state.person.lastName,
            age: this.state.person.age
        };
        peopleCopy.push(person);
        this.setState({ people: peopleCopy, person: { firstName: '', lastName: '', age: '' } });
    };
    onClearClick = () => {
        this.setState({ people: [] });
    };
    render() {
        return (
            <div className="container" style={{ marginTop: 60 }}>
                <PersonForm
                    handleFirstName={this.handleFirstName}
                    handleLastName={this.handleLastName}
                    handleAge={this.handleAge}
                    firstNameVal={this.state.person.firstName}
                    lastNameVal={this.state.person.lastName}
                    ageVal={this.state.person.age}
                    onAddClick={this.onAddClick}
                    onClearClick={this.onClearClick}
                />
                <table className="table table-hover table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Age</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.people.map((p, i) => <PersonRow person={p} key={i} />)}
                    </tbody>
                </table>
            </div>);
    }
}
export default PeopleTable
