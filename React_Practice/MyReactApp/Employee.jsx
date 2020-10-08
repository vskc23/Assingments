import Axios from "axios";
import React from "react"
import axios from 'axios'
class Employee extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            people: [],
        }
        this.handleChange = this.handleChange.bind(this);

      }
    componentDidMount() {
        axios.get('http://jsonplaceholder.typicode.com/users')
    .then(response => {
      this.setState({ people: response.data });
      console.log(this.state.people)
    })
    .catch(error => {
      console.log(error);
    });
      }
    
      handleChange(e) {
        
    let currentList = [];
        
    let newList = [];
    if (e.target.value !== "") {
      currentList = this.state.people.name;
      newList = currentList.filter(item => {
           const lc = item.toLowerCase();
           const filter = e.target.value.toLowerCase();
        return lc.includes(filter);
      });
    } else {
   
      newList = this.state.people;
    }
        // Set the filtered state based on what our rules added to newList
    this.setState({
      people: newList
    });
  }

      render() {
        return (
            <div>
                Enter the record to search <input type="text" className="input" onChange={this.handleChange} placeholder="Search..." />

            <ul>
            { this.state.people.map(person => <li>{person.id}   {person.name}    {person.username}  {person.email}</li> )}
          </ul>
          </div>
        )
      }
}

export default Employee;