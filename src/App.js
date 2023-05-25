import Transition from './pages/transition';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import React from 'react';
import Hidden from './pages/202305/hidden';
import ProjectPage from './pages/202305/project/projectPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/project/:id' element={<ProjectPage />} />
        <Route path={`${process.env.PUBLIC_URL}`} element={<Hidden />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
