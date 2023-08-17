import React from 'react'
import { Route, Routes } from 'react-router-dom'

import { Glxavor, Kino } from './Pages'

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Glxavor />} />
            <Route path="/glxavor" element={<Glxavor />} />
            <Route path="/kino/:kino" element={<Kino />} />
        </Routes>
    )
}

export default App

