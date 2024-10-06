import { BrowserRouter } from 'react-router-dom'
import { useSelector,  } from 'react-redux'
import AppRouter from './router/AppRouter'
import './App.css'
function App() {
  const auth = useSelector((state) => state.auth.isAuth)
  return (
    <>
    <BrowserRouter>
      <AppRouter />
     </BrowserRouter>
    </>
  )
}

export default App
