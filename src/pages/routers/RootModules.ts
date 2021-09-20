import React from "react";

export const RootModules = [
    {
        exact: true,
        title: 'Login',
        path: '/', 
        module: React.lazy(() => import('../login/Login')),
    }, 
    {
        exact: false,
        title: 'Home', 
        path: '/home', 
        module: React.lazy(() => import('../home/Home')),
    }
];