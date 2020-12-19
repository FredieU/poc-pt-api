import React from "react";
import { WelcomeCard } from "./components";
import "./App.css";
import { UserProvider } from "./state/UserContext";

function App() {
  return (
    <UserProvider>
      <main className="App">
        <WelcomeCard />
      </main>
    </UserProvider>
  );
}

export default App;
