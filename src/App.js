import React, { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";


const SUPABASE_URL = "https://htburghwulpjmpkjxyrq.supabase.co";

const supabase = createClient(SUPABASE_URL, process.env.REACT_APP_SUPABASE_SERVICE_KEY);

function App() {
  const [user, setUser] = useState(undefined);

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
  return (
    <div>
      <center>
        <h1>Tech Phantoms Auth</h1>
      </center>

      <br />
      <br />

      <center>
        {(user)? "welcome": <button onClick={login}>Login</button>}
      </center>
    </div>
  );
}

export default App;
