import React from "react";


const DashBoard = ({user}) => {
    return <div>
        <center>
            <img src={user.avatar_url} alt="avatar" width="200" />
            <h1>{user.user_name}</h1>
        </center>
    </div>
}


export default DashBoard;