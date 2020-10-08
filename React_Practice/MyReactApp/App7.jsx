import React, { Component } from 'react'
import Employee from './Employee.jsx'
import { Router, Route, IndexRoute,hashHistory,Link} from 'react-router'
class App7 extends Component {
  render () {
      return (
        <Router history={hashHistory}>
          <Route path='/' component={Container}>
              <IndexRoute component={Home} />
              <Route path='address' component={Address}>
                  <IndexRoute component={Instagram} />
                  <Route path='twitter' component={Twitter}/>
              </Route>
              <Route path='register' component={Register}>
                  <IndexRoute component={SignIn} />
                  <Route path='signup' component={SignUp}/>
              </Route>
              <Route path='employee' component={Employee}/>
              <Route path='about(/:name)' component={About}></Route>
              <Route path='*' component={NotFound} />
          </Route>
        </Router>
      )
    }
}
const About = (props) => (
    <div>
        <h3> Welcome to about page </h3>
        <h2>{props.params.name}</h2>
    </div>
)
const Instagram=()=><h1>Instagram component</h1>
const Twitter=()=><h1>Twitter component</h1>
const SignIn=()=><div id="abc">
    <h1> sign-in page </h1>
    <center>
Enter Username: <input type="text" name="" id=""/>
<br></br>
Enter Pssword: <input type="password" name="" id="" />
<br></br>
Submit: <input type="submit" value=""/>
<br></br></center>

</div>
const SignUp=()=><div>
    Enter name: <input type="text" name="" id=""/>
    <br></br>
    Enter Age: <input type="number" name="" id="" min="20" max="100"/>
    <br></br>
    Enter Email: <input type="email" name="" id="" />
    <br></br>
    Submit: <input type="submit" value=""/>
</div>

const Home = () => <h1>Hello from Home!</h1>
const Address = (props) =>
<div>
    <br>
    </br>
    <Link onlyActiveOnIndex activeStyle={{color:'#53acff'}} to="/address">Twitter feed</Link>
    <Link activeStyle={{color:'#53acff'}}  to="/address/instagram">Instagram feed</Link>
    <h1> Address </h1>
    {props.children}
</div>
const Register = (props) =>
<div>
    <br>
    </br>
    <Link to="/register">Signin page</Link>
    <Link to="/register/signup">signup page </Link>
    <h1> Register </h1>
    {props.children}
</div>

const NotFound=()=><h1> 404 ERROR PAGE NOT FOUND </h1>

const Nav = () => (
    <div>
      <Link to='/'>Home</Link>&nbsp;
      <Link to='/address'>Address</Link>
     
    </div>
  )

const Container = (props) => <div>
  <Nav />
  {props.children}
</div>
  


export default App7