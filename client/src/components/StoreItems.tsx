import StoreItem from './StoreItem'
import styled from 'styled-components'
import { useAppSelector } from "../store/redux-hooks"
const Wrapper = styled.section`
    width: 100%;
    padding: 2rem 0;

    display: grid;
    grid-template-columns: repeat(1,1fr);
    gap: 2rem;

    @media (min-width: 767px){
        grid-template-columns: repeat(2,1fr);
        gap: 3rem;

        padding: 2.5rem 0;
    }
    @media (min-width: 1024px) {
        grid-template-columns: repeat(3,1fr);
        gap: 4rem;
    }
`;

const StoreItems = () => {
  const data = useAppSelector(store => store.device.sortedDevices)
  return (
    <>
    <Wrapper>
      {data.map((item)=>
        <div key={item.id}>
          <StoreItem {...item}/>
        </div>
      )}
    </Wrapper>
      
    </>
  )
}

export default StoreItems