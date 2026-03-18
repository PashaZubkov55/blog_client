import { BrowserRouter } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import AppRouter from './router/AppRouter'
import './App.css'
import {Header} from './components/Header'
import { Footer } from './components/Footer'
import { useAuthQuery,  setUser} from './store/Auth/AuthSlice'
import { useEffect } from 'react'
import { ArrowTop } from './components/ArrowTop'
import { Message } from './components/Message'
import { RootState } from './store/store'





function App() {
 const message = useSelector((state:RootState)=> state.auth.statusMessage)

 
 // const {data =[]} = useAuthQuery()
 //const {Auth} = useAuthQuery()
  const dispatch = useDispatch()
  const {data=[], isLoading, error} = useAuthQuery()
 
  

  useEffect( () => { 
    if (!isLoading && !error) {

      dispatch(setUser(true))
    }else{
      console.log(error)
    }
   
      
  }, [data]);

  return (
   
   <main className="main w-screen">
    <BrowserRouter>
    
      <Header/>
    {message == true? <Message/>: false}
     
      <AppRouter />
        <ArrowTop/>
        <Footer/>
     </BrowserRouter>
     
     </main>
     
  )
}

export default App
