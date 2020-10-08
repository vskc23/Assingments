// import React from "react"
// class Greeting extends React.Component{
//     render(){
//         return(
//             <div>
//                    <h1> <mark>{this.props.message}</mark></h1>

                
//            </div>
//         );
//     }
// }

// export default Greeting;

import React from "react"

function DemoComponent(props){ 
    return( 
        <div> 
           <h2>Hello {props.user}</h2> 
         </div> 
    ); 
} 
class Greeting extends React.Component{
    render(){
        return(
            <div>
                   <h1> <mark>{this.props.message}</mark></h1>
                   <DemoComponent user = "Eshan" />
            </div>
        );
    }
}


export default Greeting;