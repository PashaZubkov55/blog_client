import { BrowserRouter } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import AppRouter from './router/AppRouter'
import './App.css'
import {Header} from './components/Header'
import { Footer } from './components/Footer'
import { useAuthQuery} from './store/Auth/AuthSlice'
import { useEffect } from 'react'

function App() {
 // const {data =[]} = useAuthQuery()
 //const {Auth} = useAuthQuery()
  const dispatch = useDispatch()
  const {data=[], isLoading, error} = useAuthQuery()
 
  

  useEffect(() => {
    if (!isLoading && !error) {
      console.log('Получены данные:', data);
    }
  }, [data, isLoading, error]);

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
