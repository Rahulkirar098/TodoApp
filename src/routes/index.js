import React from 'react'
import Admin from "../Component/pages/Admin";
import Login from "../Component/pages/Login";
import Logout from "../Component/pages/Logout";

export const Routes = [
    {
        path:"/",
        title:"/",
        exact: true,
        component:()=><Login/>
    },
    {
        path:"/admin",
        title:"/admin",
        exact: true,
        component:()=><Admin/>
    },
    {
        path:"/logout",
        title:"/logout",
        exact: true,
        component:()=><Logout/>
    }
]