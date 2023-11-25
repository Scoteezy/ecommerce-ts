import { IBrands } from "./IBrands";
import { IUser } from "./IUser";

export interface AuthResponse {
    token: string;
    user: IUser
}
export interface BrandsResponse { 
    data : IBrands[];
}
export interface BasketsResponse { 
    
}