import React,{useState} from 'react'
import { useAppDispatch,useAppSelector } from '../store/redux-hooks';
import { registerUser } from '../store/authSlice';
import { Container } from '../components/UI/Container';
import { LoginContainer,LoginForm } from '../components/UI/LoginAndRegister';
import { ErrorMessage } from '../components/UI/LoginAndRegister';
import { Link } from 'react-router-dom';
import { LoginButton } from '../components/UI/Buttons';

const Register = () => {
  const [email,setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useAppDispatch();
  const auth = useAppSelector(store=>store.auth)
  const onSubmit =(e: React.MouseEvent<HTMLButtonElement>)=>{
    e.preventDefault();
    dispatch(registerUser({email,password}))
  }
  return (
    <Container>
      <LoginContainer>
      <h1>Страница регистрации</h1>
    <LoginForm>
      <input type="email" placeholder='email' value={email} onChange={(e)=>{setEmail(e.target.value)}} />
      <input type="text" placeholder='пароль' value={password} onChange={(e)=>{setPassword(e.target.value)}} />
      <LoginButton onClick={(e)=>{onSubmit(e)}}> Зарегистрироваться </LoginButton>
    </LoginForm>
        {auth.status==='error' ?  <ErrorMessage>Пользователь с данным email уже существует</ErrorMessage> : ""}
        <Link to ='/login'>Или войдите</Link>
      </LoginContainer>
   
    </Container>
    
  )
}

export default Register