import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Ordered from './Ordered/Ordered'

const RoutesSection = () => {
  return (
    <Router>
        <Routes>
            <Route path="/ordered" element={<Ordered />} />
        </Routes>
    </Router>
  )
}

export default RoutesSection