// import React from 'react';

// export default class Employees extends React.Component{
//     constructor(props){
//         super(props);
//         this.state = {
//             name:"",
//             id:"",
//             salary:"",
//             Employees : []
//         };
//         this.addEmployee=this.addEmployee.bind(this);
//         this.displayEmployee=this.displayEmployee.bind(this);
//     }
//     displayEmployee(){
//         let items=this.state.Employees;
//         console.log(items);
//     }
//     setName(e){
//         this.setState({
//             name:e.target.value
//         });
//     }
//     setID(e){
//         this.setState({
//             id:e.target.value
//         });
//     }
//     setSalary(e){
//         this.setState({
//             salary:e.target.value
//         });
//     }
//     addEmployee(){
//         var emp = {
//             name:this.state.name,
//             id:this.state.id,
//             salary:this.state.salary
//         };
//         var Employees=this.state.Employees;
//         Employees.push(emp);
//         console.log(emp);
//         this.setState({Employees});
//     }
//     render(){
//         return (
//             <div>
//                 <table>
//                     <tr>
//                         <td>Name</td>
//                         <td><input type="text" name="ename" onChange={(e)=>this.setName(e)}></input></td>
//                     </tr>
//                     <tr>
//                         <td>ID</td>
//                         <td><input type="text" name="eid" onChange={(e)=>this.setID(e)}></input></td>
//                     </tr>
//                     <tr>
//                         <td>Salary</td>
//                         <td><input type="text" name="esalary" onChange={(e)=>this.setSalary(e)}></input></td>
//                     </tr>
//                 </table>
//                 <input type="button" value="Add" onClick={this.addEmployee}></input>
//                 <input type="button" value="Display" onClick={this.displayEmployee}></input>

//             </div>
//         );
//     }
// }









import React from 'react';
class App extends React.Component {
   constructor(props) {
      super(props);
	
      this.state = {
         data: 0
      }

      this.setNewNumber = this.setNewNumber.bind(this)
   };

   setNewNumber() {
      this.setState({data: this.state.data + 1})
   }

   render() {
      return (
         <div>
            <button onClick = {this.setNewNumber}>INCREMENT</button>
            <Content myNumber = {this.state.data}></Content>
         </div>
      );
   }
}

class Content extends React.Component {

   componentWillMount() {
      console.log('Component WILL MOUNT!')
   }

   componentDidMount() {
      console.log('Component DID MOUNT!')
   }

   componentWillReceiveProps(newProps) {    
      console.log('Component WILL RECIEVE PROPS!')
   }

   shouldComponentUpdate(newProps, newState) {
      return true;
   }

   componentWillUpdate(nextProps, nextState) {
      console.log('Component WILL UPDATE!');
   }

   componentDidUpdate(prevProps, prevState) {
      console.log('Component DID UPDATE!')
   }

   componentWillUnmount() {
      console.log('Component WILL UNMOUNT!')
   }
	
   render() {
      return (
         <div>
            <h3>{this.props.myNumber}</h3>
         </div>
      );
   }
}

export default App;
