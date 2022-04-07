import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import CreateAccount from "./components/CreateAccount";
import Header from "./components/Header";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="CreateAccount" element={<CreateAccount />}></Route>
      </Routes>
    </>
  );
};
export default App;
