import {useState} from 'react'
import { useAppDispatch,useAppSelector } from '../store/redux-hooks';
import { setUserAuth } from '../store/authSlice';
import { Container } from '../components/UI/Container';
import { LoginContainer,LoginForm } from '../components/UI/LoginAndRegister';
import { ErrorMessage } from '../components/UI/LoginAndRegister';
import { Link } from 'react-router-dom';
import { LoginButton } from '../components/UI/Buttons';
const Login = () => {
  const [email,setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useAppDispatch();
  const auth = useAppSelector(store=>store.auth)
  const onSubmit =(e: React.MouseEvent<HTMLButtonElement>)=>{
    e.preventDefault();
    dispatch(setUserAuth({email,password}))
  }
  return (
    <Container>
      <LoginContainer>
      <h1>Страница авторизации</h1>
    <LoginForm>
      <input type="email" required placeholder='email' value={email} onChange={(e)=>{setEmail(e.target.value)}} />
      <input type="text" required placeholder='пароль' value={password} onChange={(e)=>{setPassword(e.target.value)}} />
      <LoginButton onClick={(e)=>{onSubmit(e)}}> Войти</LoginButton>
    </LoginForm>
        {auth.status==='error' ?  <ErrorMessage>Неверный логин или пароль</ErrorMessage> : ""}
        <Link to="/registration">Или зарегистрируйтесь</Link>
      </LoginContainer>
   
    </Container>
    
  )
}

export default Login