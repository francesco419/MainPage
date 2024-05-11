import { Route, Routes, BrowserRouter, HashRouter } from 'react-router-dom';
import React from 'react';
import Hidden from './pages/202305/hidden';
import ProjectPage from './pages/202305/project/projectPage';
import { Canvas } from '@react-three/fiber';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path={`/project/:id`} element={<ProjectPage />} />
        <Route path={`/`} element={<Hidden />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
