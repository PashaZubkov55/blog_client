import { BrowserRouter } from 'react-router-dom'
import { useSelector,  } from 'react-redux'
import AppRouter from './router/AppRouter'
import './App.css'
import {Header} from './components/Header'
import { Footer } from './components/Footer'
function App() {
  const auth = useSelector((state) => state.auth.isAuth)
  return (
    
   <main className="main w-screen">
   
    <BrowserRouter>
      <Header/>
      <AppRouter />
        <Footer/>
     </BrowserRouter>
     
     </main>
     
  )
}

export default App
