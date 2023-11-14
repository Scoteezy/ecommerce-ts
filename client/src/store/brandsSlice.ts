import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import { IBrands } from '../models/IBrands';
export const fetchBrands = createAsyncThunk(
    'device/fetchBrands',
    async function (_,{rejectWithValue}){
        try{
            const response = await fetch('http://localhost:5000/api/brand');
            if(!response.ok){
            throw new Error('Server Error!');
            }
            const data = await response.json();
            return data;
        }
        catch(e: unknown){
            if (e instanceof Error) return rejectWithValue(e.message)
            return String(e)
        }
        
    }
)

type BrandsSlice = {
    status: 'idle' | 'loading' | 'finished' | 'error';
    brands: IBrands[];
}
const initialState:BrandsSlice ={
    status: 'idle',
    brands: [] as IBrands[],
}
const brandsSlice = createSlice({
	name: 'brands', // название слайса
	initialState,
	reducers: {
        
	},
    extraReducers:(builder)=>{
        builder.addCase(fetchBrands.pending, (state)=>{
            state.status = 'loading';
        }),
        builder.addCase(fetchBrands.fulfilled,(state,action)=>{
            state.status="finished";
            state.brands = action.payload;
        }),
        builder.addCase(fetchBrands.rejected,(state)=>{
            state.status='error';
        })

    }
	
});

// export const {} = deviceSlice.actions;
export default brandsSlice.reducer;