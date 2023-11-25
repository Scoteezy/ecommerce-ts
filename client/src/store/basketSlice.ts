import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import { IBasket, IBaskets } from '../models/IBasket';
export const fetchBasket = createAsyncThunk(
    'basket/fetchBasket',
    async function ({id}:{id:number| string},{rejectWithValue}){
        try{
            const response = await fetch(`http://localhost:5000/api/basket/${id}`, {
                method: 'GET',
                headers: {
                    credentials: 'include',
                    Authorization: `${localStorage.getItem('token')}`
                }
            });
            if(!response.ok){
            throw new Error('Server Error!');
            }
            const data: IBaskets = await response.json();
            const basketResponse = await fetch(`http://localhost:5000/api/basket`,
            {method: 'GET',
            headers:  {
                credentials: 'include',
                Authorization: `${localStorage.getItem('token')}`
            }}
            )
            const basketData = await basketResponse.json();
            const basket =  basketData.filter( (b: IBasket)=>b.basketId==data.id)
            return basket;
        }
        catch(e: unknown){
            if (e instanceof Error) return rejectWithValue(e.message)
            return String(e)
        }
        
    }
)
export const addToBasket = createAsyncThunk(
    'basket/addToBasket',
    async function ({id,deviceId}:{id:number| string, deviceId: number| string},{dispatch,rejectWithValue}){
        try{
            const response = await fetch(`http://localhost:5000/api/basket/${id}`, {
                method: 'GET',
                headers: {
                    credentials: 'include',
                    Authorization: `${localStorage.getItem('token')}`
                }
            });
            if(!response.ok){
            throw new Error('Server Error!');
            }
            const data: IBaskets = await response.json();
            console.log({deviceId: deviceId, basketId: +data.id})
            const basketResponse = await fetch(`http://localhost:5000/api/basket`,
            {method: 'POST',
            headers:  {
                credentials: 'include',
                Authorization: `${localStorage.getItem('token')}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({deviceId: deviceId, basketId: +data.id}),
        
        },
            
            )
            const basketData = await basketResponse.json();
            dispatch(addBasket(basketData));
        }
        catch(e: unknown){
            if (e instanceof Error) return rejectWithValue(e.message)
            return String(e)
        }
        
    }
)
export const removeFromBasket = createAsyncThunk(
    'basket/removeFromBasket',
    async function ({ basketId, deviceId }: { basketId: number; deviceId: number }, { dispatch, rejectWithValue }) {
      try {
        const response = await fetch(`http://localhost:5000/api/basket/delete`, {
          method: 'DELETE',
          headers: {
            Authorization: `${localStorage.getItem('token')}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ deviceId: deviceId, basketId })
        });
        if (!response.ok) {
          throw new Error('Server Error!');
        }
  
        // Corrected dispatch usage
        dispatch(removeBasket({ deviceId, basketId }));
      } catch (e: unknown) {
        if (e instanceof Error) return rejectWithValue(e.message);
        return String(e);
      }
    }
  );
  
type BaksetSlice = {
    status: 'idle' | 'loading' | 'finished' | 'error';
    basket: IBasket[];
}
const initialState:BaksetSlice ={
    status: 'idle',
    basket: [] as IBasket[],
}
const basketSlice = createSlice({
	name: 'basket', // название слайса
	initialState,
	reducers: {
        addBasket(state,action) { 
            state.basket.push(action.payload)
        },
        removeBasket(state,action){
            const indexToRemove = state.basket.findIndex(item => item.basketId === action.payload.basketId && item.deviceId === action.payload.deviceId);
            if (indexToRemove !== -1) {
                state.basket.splice(indexToRemove, 1);
              }
        }
	},
    extraReducers:(builder)=>{
        builder.addCase(fetchBasket.pending, (state)=>{
            state.status = 'loading';
        }),
        builder.addCase(fetchBasket.fulfilled,(state,action)=>{
            state.status="finished";
            state.basket = action.payload
        }),
        builder.addCase(fetchBasket.rejected,(state)=>{
            state.status='error';
        })

    }
	
});

export const {addBasket,removeBasket} = basketSlice.actions;
export default basketSlice.reducer;