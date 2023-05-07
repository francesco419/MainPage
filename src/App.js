import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FrontPage from './pages/main/FrontPage';
import ProjectNav from './pages/project/ProjectNav';
import List from './pages/navigation/List';
import Aos from 'aos';
import { useEffect } from 'react';
import Transition from './pages/transition';
import { ReactComponent as Stick } from '../src/assets/svg/walk.svg';
import Indicator from './components/new/indicator/Indicator';

function App() {
  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);

  return (
    <BrowserRouter>
      <Transition />
      <Indicator type={true} />
      {/* <Routes>
        <Route path='/ProjectNav/:id' element={<ProjectNav />} />
      </Routes> */}
      {/* <Routes>
        <Route path="/List" element={<List />} />
        <Route path="/ProjectNav/:id" element={<ProjectNav />} />
        <Route path={`${process.env.PUBLIC_URL}/`} element={<FrontPage />} />
      </Routes> */}
    </BrowserRouter>
  );
}

export default App;
