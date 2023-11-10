import { Routes,Route,Navigate } from "react-router-dom";
import { userRoutes, adminRoutes,publicRoutes } from '../routes';
import { useAppSelector } from "../store/redux-hooks";
// import Loader from './UI/Loader/Loader';
const AppRouter = () => {
    const auth = useAppSelector(store=> store.auth)
    // const auth =  true; 
  return (
    auth.isAuth
        ?auth.user?.role=='ADMIN'?<Routes>
           {adminRoutes.map((route,i)=>
          <Route key = {i} path = {route.path} element={<route.element/>}/>
            )}
            <Route path='/*' element={<Navigate to="/" replace/>}/>

        </Routes>:<Routes>
        {userRoutes.map((route,i)=>
          <Route key = {i} path = {route.path} element={<route.element/>}/>
        )}
        <Route path='/*' element={<Navigate to="/" replace/>}/>

        </Routes>:<Routes>
        {publicRoutes.map((route,i)=>
          <Route key = {i} path = {route.path} element={<route.element/>}/>
        )}
        <Route path='/*' element={<Navigate to="/" replace/>}/>
        </Routes>
  )
}

export default AppRouter