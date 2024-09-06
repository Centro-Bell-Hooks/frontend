import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'

import { Home, Login, Cadastro } from './pages'
import { Navbar, Footer } from './components'
import { AuthProviders } from './contexts/AuthContext'
import { routes } from './routes'
import { DeletarCategoria, ListaCategoria, FormCategoria } from './components/categorias'

import { DeletarProdutos } from './components/produtos/DeletarProdutos'
import { FormProduto } from './components/produtos/formProduto/FormProduto'
import { ListaProduto } from './components/produtos/listaprodutos/ListaProduto'

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

                    <Route path={routes.produtos} element={<ListaProduto />} />
                    <Route path={routes.cadastrarProduto} element={<FormProduto />} />
                    <Route path={routes.editarProduto} element={<FormProduto />} />
                    <Route path={routes.deletarProduto} element={<DeletarProdutos />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </AuthProviders>
    )
}

export default App
