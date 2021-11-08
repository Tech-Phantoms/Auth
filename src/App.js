import React, { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

import Login from './pages/login';
import Dashboard from './pages/dashboard';


const SUPABASE_URL = "https://htburghwulpjmpkjxyrq.supabase.co";

const supabase = createClient(SUPABASE_URL, process.env.REACT_APP_SUPABASE_SERVICE_KEY);

function App() {
  const [user, setUser] = useState(
    supabase.auth.user()
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
    const { user, error } = await supabase.auth.signIn({
      provider: "github",
    });

    if (!error) {
      setUser(user);
    }
  };

  useEffect(() => {
    setUser(supabase.auth.user());
  }, []);

  if (user) {
    return <Dashboard user={userData} />
  }

  return <Login login={login} />
}

export default App;
