import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import GradePage from "./pages/GradePage";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/grade/:gradeId" element={<GradePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;