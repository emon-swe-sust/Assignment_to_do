import React,{useState} from "react";
import Home from "./components/Home";
import TodoContextProvider from "./context/TodoContext";

function App() {
  return (
    <TodoContextProvider>
      <div className="App">
        <Home />
      </div>
    </TodoContextProvider>
  );
}

export default App;
