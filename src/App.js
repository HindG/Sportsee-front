import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Dashboard from "./Pages/Dashboard/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/user/:id" element={<Dashboard />}></Route>
      </Routes>
    </BrowserRouter >
  );
}

export default App;
