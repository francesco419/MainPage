import { Route, Routes, HashRouter } from 'react-router-dom';
import React, { lazy, Suspense } from 'react';
import Hidden from './pages/202305/hidden';

const ProjectPage = lazy(
  async () => await import('./pages/202305/project/projectPage')
);

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route
          path={`/project/:id`}
          element={
            <Suspense>
              <ProjectPage />
            </Suspense>
          }
        />
        <Route path={`/`} element={<Hidden />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
