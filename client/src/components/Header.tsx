import styled from "styled-components"
import { Container } from "./UI/Container"
import { useState,useEffect } from "react";
import { Option } from "../models/IOptions";
import { CustomSelect } from './UI/CustomSelect';
import { useAppDispatch, useAppSelector } from "../store/redux-hooks";
import { handleSearch } from "../store/deviceSlice";
import { useLocation } from 'react-router-dom';
import HeaderControls from "./Header/HeaderControls";

const HeaderElement  = styled.header<{location:string}>`
    box-shadow: var(--shadow);
    background-color: var(--colors-ui-base);
    margin-bottom: 50px;
    display:${props => props.location ==='/login' || props.location==='/registration'? 'none': 'block'};
`;

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 0;
`;
const TitleContainer = styled.div`
    display:flex;
    justify-content: space-between;
    align-items:center;
    & > *{ 
        margin-right: 15px;
    }
    & > *:last-child { 
        margin-right: 0;
    }
`
// const Title = styled.h1`
//     color: var(--colors-text);
//     font-size: var(--fs-sm);
//     text-decoration: none;
//     font-weight: var(--fw-bold);
// `;


const MyInput = styled.input`
    width: 50%;
    height:3rem;
    padding-left:15px;
    border-radius: var(--radii);
    color: var(--colors-text);
    background-color: var(--colors-ui-base);
    border-style: none;
    box-shadow:var(--shadow);
    margin: 0 15px;
`

const Header = () => {
    const data = useAppSelector(store => store.categories.categories);
    const brands = useAppSelector(store => store.brands.brands)
    const dispatch = useAppDispatch()
    const options:Option[] = [] ;
    data.forEach(item=>{
        options.push({value:item.id, label:item.name })
    })
    const brandOptions: Option[] = [];
    brands.forEach(item=>{
        brandOptions.push({value:item.id, label:item.name })
    })
    const [search, setSearch] = useState('');
    const [category,setCategory] = useState<Option>();
    const [brand,setBrand] = useState<Option>();
    const location = useLocation();

    useEffect(()=>{
        dispatch(handleSearch({category: category?.value || '', search: search, brand: brand?.value || ''}))
        //eslint-disable-next-line
      },[search,category,brand])
  return (
    <HeaderElement location={location.pathname}>
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
                <CustomSelect
                options={brandOptions}
                placeholder="Бренды"
                isClearable
                isSearchable={false}
                value={brand}
                onChange={setBrand}
                />
            </TitleContainer>
                <MyInput onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{setSearch(e.target.value)}} value={search} placeholder="Поиск по товарам"/>
                <HeaderControls/>
            </Wrapper>
        </Container>
    </HeaderElement>
  )
}
export default Header
