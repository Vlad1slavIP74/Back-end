import React from "react";

import axios from 'axios'

class Table extends React.Component {
  constructor(){
    super();

    this.state = {
      posts: [],
    } 
  }
  componentDidMount(){
      axios.get('http://localhost:3002')
    .then(response => {
        //const info = response.data.map(item => (<div>{item}</div>))
        const info = response.data;

        console.log(info)
        this.setState({posts: info})
        console.log(typeof this.state.posts);
      })
  }


  render() {

    return (
      <div className='container'>
        <table className='table'>
          <thead>
            <tr>
              <th> FirsName </th>
              <th> LastName </th>
              <th> Age </th>
              <th> Profession </th>
              <th> Skill </th>
              <th> Salary </th>
            </tr>
          </thead>
          <tbody>
          {this.state.posts.map(item =>
            <tr>
              <td>{item.firstName}</td>
              <td>{item.lastName}</td>
              <td>{item.age}</td>
              <td>{item.profession}</td>
              <td>{item.skills}</td>
              <td>{item.salary}</td>

            </tr>
          )}
         </tbody>
        </table>
      </div>
    );
  }
}
export default Table
