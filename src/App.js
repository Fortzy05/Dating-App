import React from "react";
import Header from "./Header";
import Signup from "./Signup";
import "./App.css";
import Login from "./Login";

const App = () => {
  return (
    <section className="main-container">
      <Header />
      <Signup />
      <Login />
    </section>
  );
};
export default App;
