import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'

import { Home, Login, Cadastro } from './pages'
import { Navbar, Footer } from './components'
import { AuthProviders } from './contexts/AuthContext'
import { routes } from './routes'

import { DeletarCategoria } from './components/categorias'
import { ListaCategoria } from './components/categorias'
import { FormCategoria } from './components/categorias'

function App() {
    return (
        <AuthProviders>
            <ToastContainer />
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path={routes.homepage} element={<Home />} />
                    <Route path={routes.login} element={<Login />} />
                    <Route path={routes.cadastro} element={<Cadastro />} />
                    <Route path={routes.categoria} element={<ListaCategoria />} />
                    <Route path="/cadastroCategoria" element={<FormCategoria />} />
                    <Route path="/editarCategoria/:id" element={<FormCategoria />} />
                    <Route path={routes.deletarcategoria} element={<DeletarCategoria />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </AuthProviders>
    )
}

export default App
