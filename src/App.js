import Home from "./pages/Home";
import ProjectDetail from "./components/ProjectDetail";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./hook/ScrollToTop.js";
import FrontPage from "./pages/FrontPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Project/:id" element={<ProjectDetail />} />
        <Route path={`${process.env.PUBLIC_URL}/`} element={<FrontPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
