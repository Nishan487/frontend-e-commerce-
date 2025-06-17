import { createContext,useContext,useEffect, useReducer, useState } from "react";
import axios from 'axios';
import reducer from "./reducer";

const AppContext=createContext();


const API = `https://fakestoreapi.com/products`;

const initialState={
    products:[],
    isLoading:false,
    isError:false,
    featureProducts:[],
}
const AppProvider=({children})=>{
    const [state,dispatch]= useReducer(reducer,initialState);
    const getProducts=async(url)=>{
        dispatch({type:"SET_LOADING"})
       try {
         const res=await axios.get(url);
         const products= await res.data;
         dispatch({
             type:"SET_APIDATA",
             payload:products})
       } catch (error) {
        dispatch({
            type:"API_ERROR",

        })
       }
    };

    useEffect(()=>{
    getProducts(`${API}`);
},[]);

  const [cartItems,setCartItems]=useState(()=>{
    const stored = localStorage.getItem("cartItems");
    return stored ? JSON.parse(stored):[];
  });

  useEffect(()=>{
    localStorage.setItem("cartItems",JSON.stringify(cartItems));
  },[cartItems]);

  const addToCart=(product)=>{
    setCartItems((prev)=>{
        const existing=prev.find((item)=> item.id===product.id);
        if(existing){
            return prev.map((item)=> 
                item.id===product.id ?{...item,quantity: item.quantity+1} : item
            );
        }
        return [...prev,{...product,quantity:1}];
    });
  }
  const removeFromCart=(id)=>{
    setCartItems((prev)=>prev.filter((item)=>item.id!==id));
  }
   
  const updateQuantity = (id, amount) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + amount } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };
    return(
   <AppContext.Provider value={{...state,cartItems,addToCart,removeFromCart,updateQuantity}}>
   {children}
   </AppContext.Provider>
)
};




const useProductContext=()=>{
    return useContext(AppContext);

};
export {AppProvider,AppContext,useProductContext};