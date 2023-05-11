import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { Route, Routes, useLocation } from 'react-router-dom';
import './transition.css';
import React from 'react';
import FirstPage from './main/FirstPage';
import SecondPage from './main/SecondPage';
import AfterSec from './main/afterSecond';
import ThirdPage from './main/ThirdPage';
import FourthPage from './main/FourthPage';
import Introduction from './main/introduction';
import ProjectNav from './project/ProjectNav';
import List from './navigation/List';
import Hidden from './main/hidden';

const Transition = () => {
  const location = useLocation();
  return (
    <TransitionGroup className='transition-group'>
      <CSSTransition key={location.pathname} classNames='fade' timeout={500}>
        <Routes location={location}>
          <Route path={`${process.env.PUBLIC_URL}`} element={<FirstPage />} />
          <Route path='/intro' element={<Introduction />} />
          <Route path='/sec' element={<SecondPage />} />
          <Route path='/asec' element={<AfterSec />} />
          <Route path='/third' element={<ThirdPage />} />
          <Route path='/fourth' element={<FourthPage />} />
          <Route path='/ProjectNav/:id' element={<ProjectNav />} />
          <Route path='/List' element={<List />} />
          <Route path='/hidden' element={<Hidden />} />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default Transition;
