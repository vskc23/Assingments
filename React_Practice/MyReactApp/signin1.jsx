import React from 'react';
// import ReactDOM from 'react-dom';

class signin1 extends React.Component{
    constructor(props){
        super(props)
        
    }
    
    render(){
        return (<div>
               <h1> sign-in page </h1>
                <center>
                Enter Username: <input type="text" name="" id=""/>
                <br></br>
                Enter Pssword: <input type="password" name="" id="" />
                <br></br>
                Submit: <input type="submit" value=""/>
                <br></br></center>
        </div>);
    }
}
export default signin1;