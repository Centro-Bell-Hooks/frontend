import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Home } from './pages'
import { Navbar, Footer } from './components'

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default App
