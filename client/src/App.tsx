import {useEffect} from 'react'
import Header from "./components/Header"
import { Container } from "./components/UI/Container"
import AppRouter from "./components/AppRouter"
import { useAppDispatch } from "./store/redux-hooks";
import { checkAuth } from "./store/authSlice";
function App() {
  const dispatch = useAppDispatch();
    useEffect(()=>{
        if(localStorage.getItem('token')){
          dispatch(checkAuth());
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
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
