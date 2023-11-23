import { useState } from "react";
import "./App.css";
import Homepage from "./components/Homepage";
import Login from "./LogIn";
import Register from "./Register/Index";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={Homepage}></Route>
          <Route path="login" element={Login}></Route>
          <Route path="register" element={Register}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
