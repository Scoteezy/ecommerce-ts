import { createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import { IUser } from '../models/IUser';
import { AuthResponse } from '../models/IAuthResponse';

type AuthSlice = { 
    status: 'idle' | 'loading' | 'finished' | 'error';
    user: IUser;
    isAuth: boolean

}
export const setUserAuth = createAsyncThunk(
    'users/setUserAuth',
    async function({email,password}:{email:string, password: string},{rejectWithValue,dispatch}) {
        try{
            const response = await fetch('http://localhost:5000/api/user/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({email,password})
            });
            if(!response.ok){
                throw new Error('Server Error!');
                }
            console.log(response)
            const data:Promise<AuthResponse> = await response.json();
            localStorage.setItem('token','Bearer ' +  (await data).token);
            dispatch(setAuth((await data).user))
        }catch(e:unknown){ 
            if (e instanceof Error) return rejectWithValue(e.message)
            return String(e)
        }
    }
)
export const registerUser = createAsyncThunk(
    'users/registerUser',
    async function({email,password}:{email:string, password: string},{rejectWithValue,dispatch}) {
        try{ 
            const role = 'USER';
            const response = await fetch('http://localhost:5000/api/user/registration', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({email,password,role})
            });
            if(!response.ok){
                throw new Error('Server Error!');
                }
            console.log(response)
            const data:Promise<AuthResponse> = await response.json();
            localStorage.setItem('token', 'Bearer ' +(await data).token);
            dispatch(setAuth((await data).user))
        }catch(e:unknown){ 
            if (e instanceof Error) return rejectWithValue(e.message)
            return String(e)
        }
    }
)
export const logoutUser = createAsyncThunk(
    'users/setUserAuth',
    async function(_,{rejectWithValue,dispatch}) {
        try{ 
            localStorage.removeItem('token');
            dispatch(logout())
        }catch(e:unknown){ 
            if (e instanceof Error) return rejectWithValue(e.message)
            return String(e)
        }
    }
)
export const checkAuth = createAsyncThunk(
    'users/checkAuth',
    async function (_,{rejectWithValue,dispatch}) {
        try{ 
            const response = await fetch('http://localhost:5000/api/user/auth', {
                method: 'GET',
                headers: {
                    credentials: 'include',
                    Authorization: `${localStorage.getItem('token')}`
                }
            });
            if(!response.ok){
                throw new Error('Server Error!');
                }
            const data:Promise<AuthResponse> = await response.json();
            localStorage.setItem('token', 'Bearer ' +(await data).token);
            dispatch(setAuth((await data).user))
        }catch(e:unknown){ 
            if (e instanceof Error) return rejectWithValue(e.message)
            return String(e)
        }
    }
)

const initialState:AuthSlice  = {
    status: 'idle',
    user: {} as IUser,
    isAuth : false
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuth(state,action) {
            state.isAuth = true;
            state.user = action.payload;
            state.status='finished';

        },
        logout(state){
            state.isAuth = false;
            state.user = {} as IUser;
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(setUserAuth.pending, (state)=>{
            state.status = 'loading';
        }),
        builder.addCase(setUserAuth.fulfilled, (state)=>{
            state.status = 'finished';
        })
        builder.addCase(setUserAuth.rejected, (state)=>{
            state.status = 'error';
        }),
        builder.addCase(registerUser.pending, (state)=>{
            state.status = 'loading';
        }),
        builder.addCase(registerUser.fulfilled, (state)=>{
            state.status = 'finished';
        }),
        builder.addCase(registerUser.rejected, (state)=>{
            state.status = 'error';
        }),
        builder.addCase(checkAuth.rejected, (state)=>{
            state.status = 'error';
            state.user = {} as IUser;
            state.isAuth = false;
            localStorage.removeItem('token');
        })
        
    }
    //     [setUserAuth.rejected]:setError,
    //     [registerUser.pending]:(state)=>{
    //         state.status = 'loading';
    //         state.error = null;
    //     },
    //     [registerUser.rejected]:setError,
    // }
})
export const {setAuth,logout} = authSlice.actions;
export default authSlice.reducer;