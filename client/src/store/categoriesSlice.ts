import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import { ICategories } from '../models/ICategories';

export const fetchCategories = createAsyncThunk(
    'device/fetchCategories',
    async function (_,{rejectWithValue}){
        try{
            const response = await fetch('http://localhost:5000/api/type');
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

type DeviceSlice = {
    status: 'idle' | 'loading' | 'finished' | 'error';
    categories: ICategories[];
}
const initialState:DeviceSlice ={
    status: 'idle',
    categories: [] as ICategories[],
}
const categoriesSlice = createSlice({
	name: 'categories', // название слайса
	initialState,
	reducers: {
        
	},
    extraReducers:(builder)=>{
        builder.addCase(fetchCategories.pending, (state)=>{
            state.status = 'loading';
        }),
        builder.addCase(fetchCategories.fulfilled,(state,action)=>{
            state.status="finished";
            state.categories = action.payload;
        }),
        builder.addCase(fetchCategories.rejected,(state)=>{
            state.status='error';
        })

    }
	
});

// export const {} = deviceSlice.actions;
export default categoriesSlice.reducer;