import AdminRoot from "../pages/admin/AdminRoot";
import Basket from "../pages/site/Basket/Basket";
import Home from "../pages/site/Home/Home";
import SiteRoot from "../pages/site/SiteRoot";
import Products from './../pages/admin/Products/Products';
import AddProducts from './../pages/admin/AddProducts/AddProducts';



const ROUTES=[
    {
        path: "/",
        element: <SiteRoot/>,
        children: [
            {
                path: "",
                element: <Home/>,

            },
            {
                path: "",
                element: <Basket/>
                
            }
        ]
    },
    {
        path: "/admin",
        element: <AdminRoot/>,
        children: [
            {
                path: "",
                element: <Products/>,

            },
            {
                path: "/admin/add",
                element: <AddProducts/>
                
            }
        ]
    }
]

export default ROUTES