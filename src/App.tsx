import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Home } from './pages'
import { Navbar, Footer } from './components'
import { AuthProviders } from './contexts/AuthContext'

function App() {
    return (
        <AuthProviders>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </AuthProviders>
    )
}

export default App
