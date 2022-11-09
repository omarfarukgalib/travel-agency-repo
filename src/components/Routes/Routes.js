import Destination from "../Destination/Destination";
import Destination1 from "../Destination1/Destination1";
import Home from "../Home/Home";
import Main from "../Main/Main";
import Services from "../Services/Services";
import TeamMember from "../TeamMember/TeamMember";

const { createBrowserRouter } = require("react-router-dom");

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
            
                element:<Home></Home>
            },
            {
                path:'/services',
                loader:()=>fetch('http://localhost:5000/services'),
                element:<Services></Services>
            },
           {
            path:'/team',
            element:<TeamMember></TeamMember>
           },
           {
            path:'/destination',
            element:<Destination></Destination>
           },
           {
            path:'/destination1',
            element:<Destination1></Destination1>
           }
        ]
    }
])