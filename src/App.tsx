import { BrowserRouter } from 'react-router-dom'
import { useSelector,  } from 'react-redux'
import AppRouter from './router/AppRouter'
import './App.css'
import {Header} from './components/Header'
import { Footer } from './components/Footer'
function App() {
  const auth = useSelector((state) => state.auth.isAuth)
  return (
    
   <main className="main">
   
    <BrowserRouter>
    <Header/>
      <AppRouter />
     </BrowserRouter>
     <Footer/>
     </main>
     
  )
}

export default App
