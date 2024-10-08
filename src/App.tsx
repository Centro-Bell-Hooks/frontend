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
    FormServico,
    DeletarServico,
    ServicosPage,
} from './pages'

function App() {
    return (
        <AuthProviders>
            <ToastContainer />
            <BrowserRouter>
                <div className="flex flex-col min-h-screen">
                    <Navbar />
                    <div className="flex-grow">
                        <Routes>
                            <Route path={routes.homepage} element={<Home />} />
                            <Route path={routes.login} element={<Login />} />
                            <Route path={routes.cadastro} element={<Cadastro />} />

                            <Route path={routes.categorias} element={<ListaCategoria />} />
                            <Route path={routes.cadastrarCategoria} element={<FormCategoria />} />
                            <Route path={routes.editarCategoria} element={<FormCategoria />} />
                            <Route path={routes.deletarCategoria} element={<DeletarCategoria />} />

                            <Route path={routes.servicos} element={<ServicosPage />} />
                            <Route path={routes.cadastrarServico} element={<FormServico />} />
                            <Route path={routes.editarServico} element={<FormServico />} />
                            <Route path={routes.deletarServico} element={<DeletarServico />} />
                        </Routes>
                    </div>
                    <Footer />
                </div>
            </BrowserRouter>
        </AuthProviders>
    )
}

export default App
