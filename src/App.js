import Home from "./pages/Home";
import Event from "./pages/Event";
import { Route, Routes } from "react-router-dom";
import Create from "./pages/Create";
function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/event" element={<Event />} />
      </Routes>
    </div>
  );
}

export default App;
