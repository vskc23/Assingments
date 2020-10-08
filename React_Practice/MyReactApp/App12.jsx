import React from 'react';
class App12 extends React.Component{
constructor() {
  super()
  this.state = {
  username: '',
  password: '',
  isLogined: false
 }
}
handleInputChange  (event)  {
this.setState({
    [event.target.name]: event.target.value
  })
}
submitClick()
{
if((this.state.username=="React") &&   (this.state.password=="React@123"))
{
   this.setState({isLogined:true});
}
}
render() {
return (
<div> 
Username : <input type="text" name="username" hint="username" onChange= {this.handleInputChange} />
<br></br>
Password : <input type="password" name="password" hint="password" onChange={this.handleInputChange} />
<br></br>
 Submit : <button  name="submit" onClick={this.submitClick}> Submit</button></div>); 
}
}

export default App12