import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Navbar } from './components/navbar'
import { Home } from './pages/homepage'
import Footer from './components/footer/Footer'

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/home" element={<Home />} />
            </Routes>
            <Footer/>
        </BrowserRouter>
        
    )
}

export default App
