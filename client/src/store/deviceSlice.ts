import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import { IDevice } from '../models/IDevice';

export const fetchDevices = createAsyncThunk(
    'device/fetchDevice',
    async function (_,{rejectWithValue}){
        try{
            const response = await fetch('http://localhost:5000/api/device');
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
    devices: IDevice[];
    sortedDevices: IDevice[];
}
const initialState:DeviceSlice ={
    status: 'idle',
    devices: [] as IDevice[],
    sortedDevices: [] as IDevice[]
}
const deviceSlice = createSlice({
	name: 'devices', // название слайса
	initialState,
	reducers: {
        handleSearch (state,action) { 
            let data = [...state.devices]
            console.log(action.payload.brand)
            
            if(action.payload.category){
                data = state.devices.filter(d => d.typeId == action.payload.category)
            }
            if(action.payload.brand){
                data = state.devices.filter(d=> d.brandId==action.payload.brand )
            }
            if(action.payload.brand && action.payload.category){
                data = state.devices.filter(d=> d.brandId==action.payload.brand && d.typeId == action.payload.category )
            }
            if(action.payload.brand && action.payload.category && action.payload.search){
                data = state.devices.filter(d=> d.brandId==action.payload.brand && d.typeId == action.payload.category && d.name.toLowerCase().includes(action.payload.search.toLowerCase()))
            }
            if(action.payload.search &&action.payload.brand && !action.payload.category){
                data = state.devices.filter(d=> d.brandId==action.payload.brand && d.name.toLowerCase().includes(action.payload.search.toLowerCase()))
            }
            if(action.payload.search && action.payload.category  && !action.payload.brand) {
                data = state.devices.filter(d=>d.typeId == action.payload.category && d.name.toLowerCase().includes(action.payload.search.toLowerCase()))
            }
            if(action.payload.search && !action.payload.category && !action.payload.brand ) {
                data = state.devices.filter(d=> d.name.toLowerCase().includes(action.payload.search.toLowerCase()))
            }
            state.sortedDevices = [...data]
        }
	},
    extraReducers:(builder)=>{
        builder.addCase(fetchDevices.pending, (state)=>{
            state.status = 'loading';
        }),
        builder.addCase(fetchDevices.fulfilled,(state,action)=>{
            state.status="finished";
            state.devices = action.payload.rows;
            state.sortedDevices = state.devices;
        }),
        builder.addCase(fetchDevices.rejected,(state)=>{
            state.status='error';
        })

    }
	
});

export const {handleSearch} = deviceSlice.actions;
export default deviceSlice.reducer;