import { BrowserRouter } from 'react-router-dom'
import { useSelector,  } from 'react-redux'
import AppRouter from './router/AppRouter'
import './App.css'
import {Header} from './components/Header'
function App() {
  const auth = useSelector((state) => state.auth.isAuth)
  return (
    
   <main className="main">
    <Header/>
    <BrowserRouter>
      <AppRouter />
     </BrowserRouter>
     </main>
     
  )
}

export default App
