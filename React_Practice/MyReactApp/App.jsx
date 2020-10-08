import React from "react"
// import Employee from './Employee.jsx'
// class App extends React.Component{
//     render(){
//         return(
//             <div>
//                 <Employee id="101" name ="krishna" salary="100000"></Employee>
//             </div>
//         );
//     }
// }

// export default App;
import Employee from './Employee.jsx'
class App extends React.Component{
    constructor(props){
        super(props);
        this.state={
            id:101,
            name:"Eshan",
            salary:10000,
            date:new Date()
        }
    }
    render(){
        return(
            <div>
               <h1> {this.state.date.toLocaleTimeString()}</h1>
            <table border="5px">
                
                <tr><Employee id={this.state.id} name={this.state.name} salary={this.state.salary}></Employee></tr>
               
            </table>

           
           </div>
        );
    }
}

export default App;