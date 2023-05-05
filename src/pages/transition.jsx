import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { Route, Routes, useLocation } from 'react-router-dom';
import './transition.css';
import React from 'react';
import FirstPage from './main/FirstPage';
import SecondPage from './main/SecondPage';
import AfterSec from './main/afterSecond';
import ThirdPage from './main/ThirdPage';
import FourthPage from './main/FourthPage';

const Transition = () => {
  const location = useLocation();
  return (
    <TransitionGroup className='transition-group'>
      <CSSTransition key={location.pathname} classNames='fade' timeout={500}>
        <Routes location={location}>
          <Route path='/' element={<FirstPage />} />
          <Route path='/sec' element={<SecondPage />} />
          <Route path='/asec' element={<AfterSec />} />
          <Route path='/third' element={<ThirdPage />} />
          <Route path='/fourth' element={<FourthPage />} />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default Transition;
