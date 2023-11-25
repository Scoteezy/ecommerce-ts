import React from 'react'
import { useAppSelector } from '../../store/redux-hooks'
import BasketItem from './BasketItem'
import { IDevice } from '../../models/IDevice'
interface extdIDevice extends IDevice { 
  repeated: number;
}
const BasketItems = () => {
  const basket = useAppSelector((store)=> store.basket.basket)
  const devices = useAppSelector((store)=>store.device.sortedDevices);
  const basketDevices = basket.flatMap(basketItem => devices.filter(device => device.id === basketItem.deviceId));
  const basketDevicesRep = basketDevices.reduce((acc: extdIDevice[], curr) => {
    const index = acc.findIndex(item => item.id === curr.id);
    if (index === -1) {
      acc.push({ ...curr, repeated: 1 });
    } else {
      acc[index].repeated++;
    }
    return acc;
  }, []);
  console.log(basketDevicesRep)
      return (
    <>
        {basketDevicesRep.map((b,i)=> <BasketItem
            key={i}
            brandId={b.brandId}
            id={b.id}
            img={b.img}
            name={b.name}
            price={b.price}
            typeId={b.typeId}
            info={b?.info}
            rating={b?.rating}
            repeated={b.repeated}
        />)}
    </>
  )
}

export default BasketItems