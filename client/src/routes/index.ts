import User from "../pages/UserPage";
import Login from "../pages/Login";
import Basket from "../pages/Basket";
import Register from "../pages/Register";
import AdminPanel from "../pages/AdminPanel";
import MainPage from "../pages/MainPage";
interface Routes {
    path: string,
    element: () => JSX.Element
}

export const userRoutes:Routes[] = [
    {path: '/basket', element:Basket},
    {path: '/user', element: User},
    {path: '/', element: MainPage},

]
export const adminRoutes:Routes[] = [
    {path: '/basket', element:Basket},
    {path: '/user', element: User},
    {path: '/admin', element: AdminPanel},
    {path: '/', element: MainPage},


]
export const publicRoutes:Routes[] = [
    {path: '/login', element: Login},
    {path: '/registration', element: Register},
    {path: '/', element: MainPage},
]