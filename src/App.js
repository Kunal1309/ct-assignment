import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Team from "./Team";
import History from "./History";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>} />
          <Route path="history" element={<History />} />
          <Route path="team" element={<Team/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
