
import React, {lazy,Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter,RouterProvider,Outlet} from 'react-router-dom'
import Header from './Components/Header';
import Body from './Components/Body';
import About from './Components/About';
import Error from './Components/Error';
import ContactUs from './Components/ContactUs';
import ResMenu from './Components/ResMenu';
import Shimmer from './Components/Shimmer';
const Grocery =lazy(()=>import('./Components/Grocery') );

const Main=()=> {

    
    return (
        
        <div className='Main'>       
             <Header/>
             
             <Outlet/>
        </div>
    )
}
const appRouter =createBrowserRouter([
    {
        path:'/',
        element:<Main/>,
        children:([
            {
                path:'/',
                element:<Body/>
            },
            {
                path:'/about',
                element:<About/>
        
            },
            {
                    path:'/grocery',
                    element:<Suspense fallback={<Shimmer/>}><Grocery /></Suspense>
            },
            {
                path:'/ContactUs',
                element:<ContactUs/>
            },
            {
                path:'/menu/:resid',
                element:<ResMenu/>
            }
        ]),
        errorElement:<Error/>
    },
   
])
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<RouterProvider router={appRouter}/>)
//('Main'*/)