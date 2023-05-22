import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { Route, Routes, useLocation } from 'react-router-dom';
import './transition.css';
import React from 'react';
import Hidden from './202305/hidden';
import ProjectPage from './202305/project/projectPage';

const Transition = () => {
  const location = useLocation();
  return (
    <TransitionGroup className='transition-group'>
      <CSSTransition key={location.pathname} classNames='fade' timeout={500}>
        <Routes location={location}>
          <Route path='/project/:id' element={<ProjectPage />} />
          <Route path={`${process.env.PUBLIC_URL}`} element={<Hidden />} />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default Transition;
