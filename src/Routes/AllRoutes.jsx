import { Route, Routes } from "react-router-dom"
import Store from "../Pages/Store"
import Homepage from "../Pages/Homepage"
import SingleProduct from "../Pages/SingleProduct"
import Cart from "../Pages/Cart"



const AllRoutes=({products , isLoading})=>{

    

    return(
        <Routes>

            <Route path="/"  element={<Homepage/>} />
            <Route path="/store"  element={<Store products={products} isLoading={isLoading}/>} />
            <Route path="/store/:category"  element={<Store products={products} isLoading={isLoading}/>} />
            <Route path="/product/:id"  element={<SingleProduct/>} />
            <Route path="/cart"  element={<Cart/>} />
            <Route path="/*"  element={<div className="w-full h-svh flex "><p className="m-auto">Coming soon...</p></div>} />
        </Routes>
    )
}

export default AllRoutes