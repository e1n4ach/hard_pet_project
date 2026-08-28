import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router'
import React, { lazy } from 'react'
import { Test } from './pages/test';

const PetsComponent = React.lazy( () => import('./pages/Pets'));
const UserComponent = React.lazy( () => import('./pages/UserInfo'));
const StoreComponent = React.lazy(() => import('./pages/Store'));
const AccordionForms = React.lazy(() => import('./pages/AccordionForms'));

export const App = () => {

  return (
    <BrowserRouter>
      <nav>
        <Link to="/user-info">User Info</Link>
        {' | '}
        <Link to="/pets">Pets</Link>
        {' | '}
        <Link to="/store">Store</Link>
        {' | '}
        <Link to="/accordion">Accordion</Link>
      </nav>
      <Test></Test>
      <Routes>
        <Route path="/" element={<Navigate to="/user-info" replace />} />
        <Route path="/user-info" element={<UserComponent />} />
        <Route path="/pets" element={<PetsComponent />} />
        <Route path="/store" element={<StoreComponent />} />
        <Route path="/accordion" element={<AccordionForms />}/>
      </Routes>
    </BrowserRouter>
  )
}