import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Home, Login, Cadastro } from './pages'
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
                    <Route path="/cadastro" element={<Cadastro />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </AuthProviders>
    )
}

export default App
