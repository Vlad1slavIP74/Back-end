import React from "react";

import axios from 'axios'

import App from './App';

import Table from './Table'

class Form extends React.Component {
	constructor() {
		super();
		this.state = {
      FirstName: '',
      LastName: '',
      Age: '',
      Profession: '',
      Skills: '',
      Salary: ''
    };
	}


	handleChange(event) {
		this.setState({
        [event.target.name]: event.target.value
       });

	}


	handleSubmit(event) {
    axios.post('http://localhost:3002/new', {
			firstName: this.state.FirstName,
			lastName: this.state.LastName,
			age: this.state.Age,
			profession: this.state.Profession,
			skills: this.state.Skills,
			salary: this.state.Salary
		})
	}

	render() {

		return (
    <form onSubmit={this.handleSubmit.bind(this)}>
    <div>
    <input name="FirstName" value={this.state.FirstName}
      placeholder="FirstName"
     onChange={this.handleChange.bind(this)} />
    </div>

    <div>
    <input name="LastName" value={this.state.LastName}
     placeholder="LastName"
     onChange={this.handleChange.bind(this)} />
    </div>

    <div>
    <input name="Age" value={this.state.Age}
     placeholder="Age"
     onChange={this.handleChange.bind(this)} />
    </div>

    <div>
    <input name="Profession" value={this.state.Profession}
     placeholder="Profession"
     onChange={this.handleChange.bind(this)} />
    </div>

    <div>
    <input name="Skills" value={this.state.Skills}
     placeholder="Skills"
     onChange={this.handleChange.bind(this)} />
    </div>

    <div>
    <input name="Salary" value={this.state.Salary }
     placeholder="Salary"
     onChange={this.handleChange.bind(this)} />
    </div>

    <button type="submit">submit</button>
		</form>
  )
	}
}

export default Form;
