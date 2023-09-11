import { RouteObject } from "react-router-dom";
import LinkLayout from "../Layout/LinkLayout";
import MainPage from "../Pages/MainPage";
import GamePage from "../Pages/GamePage";


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
            }
       ]
    }
]


export default routes