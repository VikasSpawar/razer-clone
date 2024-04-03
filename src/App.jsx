import { useEffect, useState } from "react";

import "./App.css";
import AllRoutes from "./Routes/AllRoutes";
import Navbar from "./components/Navbar";

import axios from "axios";
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer";

function App() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const api = import.meta.env.VITE_API;

  useEffect(() => {
    setIsLoading(true);
    axios(`${api}/products`).then((res) => {
      setIsLoading(false);
      setProducts(res.data);
    });
  }, []);

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <Navbar products={products} isLoading={isLoading} />
      <AllRoutes products={products} isLoading={isLoading} />
      <Footer />
      {/* <Homepage/> */}
    </>
  );
}

export default App;
