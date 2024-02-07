import { Route, Routes } from "react-router-dom"



const AllRoutes=()=>{

    return(
        <Routes>

            <Route path="/"  element={'Home'} />
            <Route path="/store"  element={'store'} />
            <Route path="/pc"  element={'PC'} />
        </Routes>
    )
}