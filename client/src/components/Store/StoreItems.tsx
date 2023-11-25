import StoreItem from './StoreItem'
import { useAppSelector } from "../../store/redux-hooks"
import { Wrapper } from '../UI/Wrapper';

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