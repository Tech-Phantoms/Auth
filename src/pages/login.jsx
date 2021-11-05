import React from 'react';

const Login = ({ login }) => {
    return <div>
        <center>
            <h1>Tech Phantoms Auth</h1>
        </center>

        <br />
        <br />

        <center>
            <button onClick={login}>Login</button>
        </center>
    </div>
};


export default Login;