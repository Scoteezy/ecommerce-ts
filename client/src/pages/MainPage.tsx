import StoreItems from '../components/StoreItems'
import { IStoreItem } from '../models/IStoreItem'

interface MainPageProps {
  items: IStoreItem[]
}

const MainPage = ({items}:MainPageProps) => {
  
  return (
      <StoreItems items={items}/>
    )
}

export default MainPage