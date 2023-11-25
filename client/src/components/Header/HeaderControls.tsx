import {useState,useEffect} from 'react'
import {IoMoon, IoMoonOutline, IoCart, IoCartOutline, IoPerson, IoPersonOutline} from 'react-icons/io5'
import { Link } from "react-router-dom";
import { useAppSelector,useAppDispatch } from '../../store/redux-hooks';
import { logoutUser } from '../../store/authSlice';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { UserButton,PrimaryButton } from '../UI/Buttons';
    
    const StyledLink = styled(Link)`
        color: var(--colors-text);
        text-decoration:none;
    `
   
    const ModeSwitcher = styled.div`
        color: var(--colors-text);
        font-size: var(--fs-sm);
        display: flex;
        cursor: pointer;
        margin-right: 15px;
        text-transform: capitalize;
    `;
    const HeaderControlsStyles = styled.div`
        display: flex;
        align-items: center;
        justify-content:space-around;
    `
    const CartButton = styled.button`
        color: var(--colors-text);
        font-size: var(--fs-sm);
        width: 2rem;
        height: 2rem;
        position: relative;
        cursor: pointer;
        border:none;
        background-color: var(--colors-ui-base);
        display: flex;
        align-items:center;
        justify-content: center;
        margin-right: 20px;
        & > div {
            border: 1px solid;
            border-radius: 50%;
            display:flex;
            justify-content:center;
            align-items: center;
            color: var(--colors-text);
            font-size: 10px;
            width:1rem;
            height:1rem;
            position:absolute; 
            bottom: 0; 
            right:0;
            transform: translate(25%,15%);
        }
    `
    const User = styled.div`
        position: relative;
        border:none;
    `
     
    const UserControls = styled.div`
        position: absolute;
        top: 0; 
        right:0;
        transform: translate(23%,60%);
        display:flex;
        flex-direction:column;
        border-radius: var(--radii);
        color: var(--colors-text);
        background-color: var(--colors-ui-base);
        box-shadow:var(--shadow);
        & > p {
            margin: 10px 5px 0 5px;
        }
        & > button { 
            border-radius: var(--radii);
            color: var(--colors-text);
            background-color: var(--color-bg);
            border-style: none;
            padding:5px 0 ;
            margin: 10px 5px 5px 5px;
            cursor: pointer;
        }
    `
const HeaderControls = () => {
    const [theme,setTheme] = useState('light');
    const toggleTheme = ()=> setTheme(theme ==='light' ? 'dark' : 'light');
    const auth = useAppSelector(store=>store.auth);
    const basket = useAppSelector(store => store.basket.basket)
    const [show,setShow] = useState(false);
    const dispatch= useAppDispatch();
    const navigate = useNavigate();
    useEffect(()=>{
        document.body.setAttribute('data-theme',theme)
    },[theme])
  return (
    <HeaderControlsStyles>
        <ModeSwitcher onClick={toggleTheme}>
            {theme ==='light' ? (<IoMoonOutline size="20px"/>) : ( <IoMoon size="20px"/>)}
        </ModeSwitcher>
        {auth.isAuth?
        <>
        <CartButton  onClick={()=>{navigate('/basket')}}>
            {theme ==='light' ? (<IoCartOutline size="25px"/>) : ( <IoCart size="25px"/>)}
            <div>
            {basket.length}
            </div>
        </CartButton>
        <User>
            <UserButton onClick={()=>{setShow(!show)}}>
                {theme ==='light' ? (<IoPersonOutline size="22px"/>) : ( <IoPerson size="22px"/>)}
            </UserButton>
            {show? <UserControls>
                    <p>{auth.user.email}</p>
                    <button onClick={()=>{dispatch(logoutUser())}}>Выйти</button>
            </UserControls>: "" }
           
        </User>
        
        </>
        : <PrimaryButton><StyledLink to='/login'>Авторизоваться</StyledLink> </PrimaryButton>}
    
    </HeaderControlsStyles>
  )
}

export default HeaderControls