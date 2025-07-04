import { Route, Routes } from "react-router-dom";

import CreateProduct from "./pages/CreateProduct";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      {" "}
      <Routes>
        <Navbar />
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreateProduct />} />
      </Routes>
    </>
  );
}

export default App;
