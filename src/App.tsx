import { BrowserRouter } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import AppRouter from './router/AppRouter'
import './App.css'
import {Header} from './components/Header'
import { Footer } from './components/Footer'
import { useAuthQuery, setAuth, setUser} from './store/Auth/AuthSlice'
import { useEffect } from 'react'


function App() {
 const user = useSelector((state)=> state.auth.user)
 // const {data =[]} = useAuthQuery()
 //const {Auth} = useAuthQuery()
  const dispatch = useDispatch()
  const {data=[], refetch, isLoading, error} = useAuthQuery()
 
  

  useEffect( () => { 
    if (!isLoading && !error) {
      console.log('Получены данные:', data);
      dispatch(setUser(true))
    }else{
      console.log(error)
    }
   
      
  }, [data]);

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
