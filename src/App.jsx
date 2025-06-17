import React, { useState } from 'react'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Home from './component/Home';
import About from './component/About';
import Product from './component/Product';
import Contact from './component/Contact';
import Cart from './component/Cart';
import ErrorPage from './component/ErrorPage';
import NavBar from './NavBar';
const App = () => {

   const [mode,setMode]=useState({
        color:"black",
        backgroundColor:'white',
         });
    
         const toggleMode=()=>{
            if(mode.color==='black'){
                setMode({color:'white',backgroundColor:'black'})
                document.body.style.backgroundColor='black';
                }else{
                    setMode({color:'black',backgroundColor:'white'})
                    document.body.style.backgroundColor='white';
                }
         }
    
  return (
      
  <Router>
     <NavBar toggleMode={toggleMode}/>
    <Routes>
      <Route path="/" element={<Home mode={mode} />} />
      <Route path="/about" element={<About/>} />
      <Route path="/product" element={<Product/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/cart" element={<Cart/>} />
      <Route path="*" element={<ErrorPage/>} />
      {/* <Route path="/singleproduct/:id" element={<SingleProduct/>} /> */}
      
    </Routes>
  </Router>
  )
}

export default App