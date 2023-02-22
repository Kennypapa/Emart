import {useEffect, useState } from "react";
import {useDispatch, useSelector} from 'react-redux';
import { cartActions } from "../store/index";

const Cart = () => {
  const dispatch = useDispatch();
  // const listProducts = localStorage.getItem("products") || '[]';
  // let products = JSON.parse(listProducts);
  const product = useSelector((state) => state.cartState)
  console.log(product);
  const addProductHandler = () => {
   dispatch(cartActions.ADDITEM());
  }
  return (
    <div>
      <div className=" mt-[89px] w-[60%] mx-auto ">
        {
            product.map((prd) => 
            (
                <div key={prd.id} className="max-h-[300px] flex justify-center items-center" >
                    <div className="lg:h-[300px] md:h-[400px] h-[370px] w-[600px] mr-6">
                      <img src={prd.image} alt={prd.title} className="w-full h-full object-contain" />
                    </div>
                    <div className="w-[90%]">
                        <div>  
                          <p className="text-2xl w-[70%]">{prd.title}</p>
                        </div>
                        <div className="flex">
                          <div className="flex">
                            <p className="text-2xl">2 x ${prd.price}</p>
                          </div>
                          <div>
                            <button onClick={addProductHandler}>+</button>
                          </div>
                        </div>
                    </div>
                </div>
            ))
        }
        <div className="border-t border-t-gray-400 h-[40px] w-full flex justify-end items-center">
          <p className="text-right">
            Total Price: #50
          </p>
        </div>
      </div>
      <div>
         {
            product.length === 0 && 
            <p className="text-3xl text-center">No items are added</p>
         }
      </div>
      
    </div>
  );
};

export default Cart;
