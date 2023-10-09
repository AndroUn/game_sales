import { RouteObject } from "react-router-dom";
import LinkLayout from "../Layout/LinkLayout";
import MainPage from "../Pages/MainPage";
import GamePage from "../Pages/GamePage";
import AccessoriesPage from "../Pages/AccessoriesPage";
import AboutPage from "../Pages/AboutPage";
import ErrorPage from "../Pages/ErrorPage";


const routes: RouteObject[] = [
    {
       element: <LinkLayout/>,
       path: '/',
       children: [
            {
                element: <MainPage/>,
                index: true
            },
            {
                element: <GamePage/>,
                path: '/games'
            },
            {
                element: <AccessoriesPage />,
                path: '/accessories'
            },
            {
                element: <AboutPage />,
                path: '/about'
            }
       ]
    },
    {
        element: <ErrorPage />,
        path: '*'
    }
]


export default routes