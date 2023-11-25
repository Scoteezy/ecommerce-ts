import { useNavigate } from 'react-router-dom'
import BasketItems from '../components/Basket/BasketItems'
import { PrimaryButton } from '../components/UI/Buttons'
import styled from 'styled-components'
import { Wrapper } from '../components/UI/Wrapper'
const BasketLayout = styled.section`
  display:flex;
  flex-direction:column;
  & > div{
    display: flex;
    align-items: center;
  }
  `
  const Title = styled.div`
    font-size:45px;
    font-weight: var(--fw-bold);
    margin:0 auto;
  `
  
const Basket = () => {
  const navigate = useNavigate()
  
  return (
    <BasketLayout>
      <div>
        <PrimaryButton onClick={()=>{navigate(-1)}}>Назад</PrimaryButton>
      </div>
        <Title>Корзина</Title>
         <Wrapper>
            <BasketItems />
         </Wrapper>
      <PrimaryButton margin='0 auto'> Заказать</PrimaryButton>
    </BasketLayout>
  )
}

export default Basket