import React from 'react';
import {Form,Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './login.css';


const Login = ({ login }) => {
    
    return (
        <div className = "loginbg">
       
        <Form className = "sigin">
        <h1>Tech-Phantoms</h1>
        <img className="img"src="banner.png" alt="haha" />

        <Button className ="box" variant="primary" type="submit" to href="https://github.com/login">
          Login with Github
        </Button>
      </Form>
  
      </div>
    )
    
};


export default Login;