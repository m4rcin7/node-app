import { Route, Routes } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import HomePage from "./pages/HomePage";
import CreateProduct from "./pages/CreateProduct";

function App() {
  return (
    <Box
      minH={"100vh"}
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreateProduct />} />
      </Routes>
    </Box>
  );
}

export default App;
