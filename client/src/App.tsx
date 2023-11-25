import {useEffect} from 'react'
import Header from "./components/Header/Header"
import { Container } from "./components/UI/Container"
import AppRouter from "./components/AppRouter"
import { useAppDispatch, useAppSelector } from "./store/redux-hooks";
import { checkAuth } from "./store/authSlice";
import { fetchBasket } from './store/basketSlice';
function App() {
  const dispatch = useAppDispatch();
  const auth = useAppSelector((store)=>store.auth)
    useEffect(()=>{
        if(localStorage.getItem('token')){
          dispatch(checkAuth());
        }
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    useEffect(()=>{
      if(auth.isAuth){
        dispatch(fetchBasket({id: auth.user.id}))
      }
    },[auth.isAuth])
  return (
    <>
      <Header/>
      <Container>
        <AppRouter/>
      </Container>
    </>
  )
}

export default App
