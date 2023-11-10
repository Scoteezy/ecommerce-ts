import { IDeviceInfo } from "./IDeviceInfo";

export interface IDevice{
    id: number;
    name: string;
    price: number;
    rating?: number;
    img: string;
    typeId: number;
    brandId: number;
    info?: IDeviceInfo[]
}