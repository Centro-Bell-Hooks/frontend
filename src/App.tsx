import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Home, Login } from './pages'
import { Navbar, Footer } from './components'
import { AuthProviders } from './contexts/AuthContext'


function App() {
    return (
        <AuthProviders>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </AuthProviders>
    )
}

export default App
