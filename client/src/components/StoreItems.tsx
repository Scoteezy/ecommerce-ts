import React from 'react'
import StoreItem from './StoreItem'
import items from '../data/mock.json'
import styled from 'styled-components'

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
  console.log('asd')
  console.log(items)
  return (
    <>
    <Wrapper>
      {items.map((item)=>
        <div key={item.id}>
          <StoreItem {...item}/>
        </div>
      )}
    </Wrapper>
      
    </>
  )
}

export default StoreItems