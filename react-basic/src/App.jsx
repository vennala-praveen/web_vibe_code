import React, { useState } from "react";
import Login from "./Components/login";
import Registration from "./Components/Registration";

const App = () => {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div>
      {showLogin ? (
        <Login switchToRegistration={() => setShowLogin(false)} />
      ) : (
        <Registration switchToLogin={() => setShowLogin(true)} />
      )}
    </div>
  );
};

export default App;
