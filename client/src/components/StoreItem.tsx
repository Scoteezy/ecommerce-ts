import styled from 'styled-components'
import { formatCurrency } from '../utilities/formatCurrency'
import { IDevice } from '../models/IDevice'
import { imgFormatter } from '../utilities/imgFomatter'
import { useAppSelector } from '../store/redux-hooks'
interface StoreItemProps extends IDevice{
}
const Container = styled.div`
  margin: 0 auto;
  width: 300px;
  display: flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  overflow:hidden;
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

const StoreItem = ({name,brandId,img,typeId,id,info,price}: StoreItemProps) => {
  const data = useAppSelector((store)=>store.categories.categories)
  const category = data.find(item=>item.id==typeId);
  return (
    <Container>
      <Img src={imgFormatter(img)} alt={name} />
      <Title>
        <Name>{name}</Name><Price>{formatCurrency(price)}</Price>
      </Title>
      <Description>
        Описание товара: {info? info.map((item)=>{ return (<p>{item.title}</p>)}) : "Нет описания"}
        <p>
        Бренд : {brandId}
        </p>
        <p>
        Категория: {category?.name}
        </p>

      </Description>
      <div>
        <Button>Add to cart</Button>
      </div>
    </Container>
  )
}

export default StoreItem