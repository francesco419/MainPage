import Home from "./pages/Home";
import Skillpage from "./pages/Skillpage";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/skills" element={<Skillpage/>}/>
        <Route path={`${process.env.PUBLIC_URL}/`} element={<Home/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;