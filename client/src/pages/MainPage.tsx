import StoreItems from '../components/StoreItems'
import { useAppSelector, useAppDispatch } from "../store/redux-hooks"
import {useEffect} from 'react'
import { fetchDevices } from '../store/deviceSlice'
import { fetchCategories } from '../store/categoriesSlice'
import { fetchBrands } from '../store/brandsSlice'
const MainPage = () => {
      const data = useAppSelector(store=> store.device)
      const dispatch = useAppDispatch();
      useEffect(()=>{
                  if(data.devices.length==0){
                        dispatch(fetchDevices())
                        dispatch(fetchCategories())
                        dispatch(fetchBrands())
                  }
      // eslint-disable-next-line react-hooks/exhaustive-deps
      },[])
      return(<StoreItems/>)
}

export default MainPage