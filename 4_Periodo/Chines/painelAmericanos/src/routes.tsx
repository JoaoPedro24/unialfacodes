    import{
        BrowserRouter,
        Routes,
        Route
    } from 'react-router-dom'
    import Login from './pages/Login'
    import Dashboard from './pages/Dashboard'
    import Produto from './pages/Produto'
    import PageExampleState from './pages/PageExampleState'
import Usuarios from './pages/Usuarios'
import Voluntarios from './pages/Voluntarios'
    

  
  export const Rotas = () => {
    return(
             <BrowserRouter>
                <Routes>


                    <Route
                    path='/'
                    element={<Login />}
                    />

                    <Route
                    path= '/dashboard'
                    element={<Dashboard />}
                    />

                    <Route
                    path='/usuarios'
                    element={<Usuarios/>}
                    />

                    <Route
                    path= '/produto/:id'
                    element={<Produto />}
                    />

                    <Route
                    path= '/voluntarios'
                    element={<Voluntarios />}
                    />


                    <Route      
                    path= '/example'
                    element={<PageExampleState />}
                    />

                </Routes>
            </BrowserRouter>
  )
    }