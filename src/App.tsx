import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home, Login, Cadastro } from './pages'
import { Navbar, Footer } from './components'
import { AuthProviders } from './contexts/AuthContext'
import { routes } from './routes'
import ListaCategoria from './components/categorias/listacategoria/ListaCategoria'

import FormCategoria from './components/categorias/formcategorias/FormCategorias'

function App() {
    return (
        <AuthProviders>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path={routes.homepage} element={<Home />} />
                    <Route path={routes.login} element={<Login />} />
                    <Route path={routes.cadastro} element={<Cadastro />} />
                    <Route path={routes.categoria} element={<ListaCategoria />} />
                    <Route path="/cadastroCategoria" element={<FormCategoria />} />
                    <Route path="/editarCategoria/:id" element={<FormCategoria />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </AuthProviders>
    )
}

export default App
