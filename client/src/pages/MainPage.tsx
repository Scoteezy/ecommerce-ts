import StoreItems from '../components/StoreItems'
import { useAppSelector, useAppDispatch } from "../store/redux-hooks"
import {useEffect} from 'react'
import { fetchDevices } from '../store/deviceSlice'
import { fetchCategories } from '../store/categoriesSlice'
const MainPage = () => {
      const data = useAppSelector(store=> store.device)
      const dispatch = useAppDispatch();
      useEffect(()=>{
                  if(data.devices.length==0){
                        dispatch(fetchDevices())
                        dispatch(fetchCategories())
                  }
      // eslint-disable-next-line react-hooks/exhaustive-deps
      },[])
      console.log(data)
      return(<StoreItems/>)
}

export default MainPage