import Home from "./pages/Home";
import ProjectDetail from "./components/ProjectDetail";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FrontPage from "./pages/FrontPage";
import ProjectNav from "./components/new/ProjectNav";
import List from "./components/new/List";
import Aos from "aos";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/List" element={<List />} />
        <Route path="/ProjectNav/:id" element={<ProjectNav />} />
        <Route path="/Project/:id" element={<ProjectDetail />} />
        <Route path={`${process.env.PUBLIC_URL}/`} element={<FrontPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
