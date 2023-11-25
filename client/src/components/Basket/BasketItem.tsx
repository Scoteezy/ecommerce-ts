import React from 'react'
import { IDevice } from '../../models/IDevice'
import { imgFormatter } from '../../utilities/imgFomatter'
import styled from 'styled-components'
import { useAppSelector, useAppDispatch } from '../../store/redux-hooks'
import { formatCurrency } from '../../utilities/formatCurrency'
import { removeFromBasket } from '../../store/basketSlice'
const Container = styled.div`
  margin: 0 auto;
  width: 300px;
  display: flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  overflow:hidden;
  border-radius: var(--radii);
`
const Img = styled.img`
  width: 100%;
  object-fit: contain;
  border-radius:15px;
  max-height:300px;
`
const Title = styled.div`
  margin-top: 15px;
  width: 100%;
  display: flex;
  color: var(--colors-text);
  justify-content: space-between;
  align-items: baseline;
  margin-bottom:10px;
  font-size:var(--fs-md);
`
const Name = styled.span`
  display:block;
  font-weight:var(--fw-normal);
`
const Price = styled.span`
  display:block;
  font-size:var(--fs-sm);
  font-weight: var(--fw-light);
`
const Description = styled.div`
  width: 100%;
  margin-bottom: 15px;
`
const Button = styled.button`
  width: 300px;
  height: 30px;
  border-radius:5px;
  border-style: none;
  color: var(--colors-text);
  background-color: var(--colors-ui-base);
  box-shadow:var(--shadow);
  cursor: pointer;
`
interface BasketItemProps extends IDevice { 
    repeated: number;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const BasketItem = ({brandId,id,img,name,price,typeId,info,rating, repeated} : BasketItemProps) => {
  const data = useAppSelector((store)=>store.categories.categories)
  const basketId = useAppSelector((store)=>store.basket.basket[0].basketId)
  const category = data.find(item=>item.id==typeId);
  const brands = useAppSelector((store)=>store.brands.brands);
  const brandName = brands.find((brand)=>brand.id == brandId)?.name;
  console.log(id,basketId)
  const dispatch = useAppDispatch();
  return (
    <Container>
    <Img src={imgFormatter(img)} alt={name} />
    <Title>
      <Name>{name}</Name><Price>{formatCurrency(price)}</Price>
    </Title>
    <Description>
      Описание товара: {info? info.map((item)=>{ return (<p>{item.title}</p>)}) : "Нет описания"}
      <p>
      Бренд : {brandName}
      </p>
      <p>
      Категория: {category?.name}
      </p>
        <p>
            Кол-во в корзине {repeated}
        </p>
    </Description>
    <div>
      {
     <Button onClick={()=>dispatch(removeFromBasket({basketId, deviceId:id}))}>Удалить из корзины</Button>
      }
    </div>
  </Container>
  )
}

export default BasketItem