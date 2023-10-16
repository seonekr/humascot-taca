import "./App.css";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Signup from "./Signup";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/humascot-taca" element={<Signup/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
