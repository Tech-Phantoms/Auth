import React, { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

import Login from './pages/login';
import Dashboard from './pages/dashboard';


const SUPABASE_URL = "https://htburghwulpjmpkjxyrq.supabase.co";



function App() {
  const [user, setUser] = useState(
   
  );
  /**
   * When successfully Signed in you have 
   * userData.avatar_url
   * userData.full_name
   * userData.user_name
   */
  const userData = (user) ? user.user_metadata : null
  console.log(userData);

  const login = async () => {
    
    ;

   
  };

  useEffect(() => {
    
  }, []);

  if (user) {
    return <Dashboard user={userData} />
  }

  return <Login login={login} />
}

export default App;
