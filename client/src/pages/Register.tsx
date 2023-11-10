import {useState} from 'react'
import { useAppDispatch } from '../store/redux-hooks';
import { registerUser } from '../store/authSlice';
import { Container } from '../components/UI/Container';
import { LoginContainer,LoginForm,LoginButton } from '../components/UI/LoginAndRegister';
import { Link } from 'react-router-dom';
const Register = () => {
  const [email,setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useAppDispatch();
  
  return (
    <Container>
      <LoginContainer>
      <h1>Страница регистрации</h1>
    <LoginForm>
      <input type="text" placeholder='email' value={email} onChange={(e)=>{setEmail(e.target.value)}} />
      <input type="text" placeholder='пароль' value={password} onChange={(e)=>{setPassword(e.target.value)}} />
      <LoginButton onClick={()=>{dispatch(registerUser({email,password}))}}> Войти</LoginButton>
    </LoginForm>
        <Link to ='/login'>Или войдите</Link>
      </LoginContainer>
   
    </Container>
    
  )
}

export default Register