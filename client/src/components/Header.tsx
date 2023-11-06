import styled from "styled-components"
import {IoMoon, IoMoonOutline, IoCart, IoCartOutline, IoPerson, IoPersonOutline} from 'react-icons/io5'
import { Container } from "./UI/Container"
import { useState,useEffect } from "react";
import { Option } from "../models/IOptions";
import { CustomSelect } from './UI/CustomSelect';
const options:Option[] = [
    {value: 'Computers', label: 'Компьютеры'},
    {value: 'Monitors', label: 'Мониторы'},
    {value: 'Peripherals', label: 'Компьютерная переферия'},
    {value: 'NoteBooks', label: 'Ноутбуки'},
    {value: 'Phones', label: 'Телефоны'},
  ] ;
const HeaderElement  = styled.header`
    box-shadow: var(--shadow);
    background-color: var(--colors-ui-base);
    margin-bottom: 50px;
`;

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 0;
`;
const TitleContainer = styled.div`
    display:flex;
    flex-direction:column;
    justify-content: space-between;
    align-items:center;
`
// const Title = styled.h1`
//     color: var(--colors-text);
//     font-size: var(--fs-sm);
//     text-decoration: none;
//     font-weight: var(--fw-bold);
// `;

const ModeSwitcher = styled.div`
    color: var(--colors-text);
    font-size: var(--fs-sm);
    display: flex;
    cursor: pointer;
    margin-right: 15px;
    /* font-weight: var(--fw-bold); */
    text-transform: capitalize;
`;
const HeaderControls = styled.div`
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
const MyInput = styled.input`
    width: 50%;
    height:3rem;
    padding-left:15px;
    border-radius: 5px;
    color: var(--colors-text);
    background-color: var(--colors-ui-base);
    border-style: none;
    box-shadow:var(--shadow);
`
interface HeaderProps {
    handleSearch: (search?:string, category?:string )=>void
}

const Header = ({handleSearch}: HeaderProps) => {
    const [theme,setTheme] = useState('light');
    const [search, setSearch] = useState('');
    const [category,setCategory] = useState<Option>();
    const toggleTheme = ()=> setTheme(theme ==='light' ? 'dark' : 'light');

    useEffect(()=>{
        document.body.setAttribute('data-theme',theme)
    },[theme])
    useEffect(()=>{
        const regionValue = category?.value || '';
        handleSearch(search,regionValue);
        //eslint-disable-next-line
      },[search,category])
  return (
    <HeaderElement>
        <Container>
            <Wrapper>
            <TitleContainer>
                <CustomSelect
                options={options}
                placeholder="Категории"
                isClearable
                isSearchable={false}
                value={category}
                onChange={setCategory}
                />
            </TitleContainer>
                <MyInput onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{setSearch(e.target.value)}} value={search} placeholder="Поиск по товарам"/>
                <HeaderControls>
                <ModeSwitcher onClick={toggleTheme}>
                    {theme ==='light' ? (<IoMoonOutline size="20px"/>) : ( <IoMoon size="20px"/>)}
                </ModeSwitcher>
                <CartButton  >
                    {theme ==='light' ? (<IoCartOutline size="25px"/>) : ( <IoCart size="25px"/>)}
                    <div>
                    {1}
                    </div>

                </CartButton>
                {theme ==='light' ? (<IoPersonOutline size="22px"/>) : ( <IoPerson size="22px"/>)}
                </HeaderControls>
            </Wrapper>
        </Container>
    </HeaderElement>
  )
}
export default Header
