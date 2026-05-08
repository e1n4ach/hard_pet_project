import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router'

import { UserInfo } from './pages/UserInfo'
import { Pets } from './pages/Pets'

export const App = () => {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/user-info">User Info</Link>
        {' | '}
        <Link to="/pets">Pets</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Navigate to="/user-info" replace />} />
        <Route path="/user-info" element={<UserInfo />} />
        <Route path="/pets" element={<Pets />} />
      </Routes>
    </BrowserRouter>
  )
}