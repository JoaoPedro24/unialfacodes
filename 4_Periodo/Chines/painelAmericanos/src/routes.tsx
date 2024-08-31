    import{
        BrowserRouter,
        Routes,
        Route
    } from 'react-router-dom'
    import Login from './pages/Login'
    import Dashboard from './pages/Dashboard'
    import Produto from './pages/Produto'
    import PageExampleState from './pages/PageExampleState'

  
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
                    path= '/produto/:id'
                    element={<Produto />}
                    />


                    <Route      
                    path= '/example'
                    element={<PageExampleState />}
                    />

                </Routes>
            </BrowserRouter>
  )
    }