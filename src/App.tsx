import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'

import { Navbar, Footer } from './components'
import { AuthProviders } from './contexts'
import { routes } from './routes'
import {
    Home,
    Login,
    Cadastro,
    ListaCategoria,
    FormCategoria,
    DeletarCategoria,
    ListaServicos,
    FormServico,
    DeletarServico,
} from './pages'

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

                    <Route path={routes.categorias} element={<ListaCategoria />} />
                    <Route path={routes.cadastrarCategoria} element={<FormCategoria />} />
                    <Route path={routes.editarCategoria} element={<FormCategoria />} />
                    <Route path={routes.deletarCategoria} element={<DeletarCategoria />} />

                    <Route path={routes.servicos} element={<ListaServicos />} />
                    <Route path={routes.cadastrarServico} element={<FormServico />} />
                    <Route path={routes.editarServico} element={<FormServico />} />
                    <Route path={routes.deletarServico} element={<DeletarServico />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </AuthProviders>
    )
}

export default App
