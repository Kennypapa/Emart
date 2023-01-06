import {useEffect, useState } from "react";
const Cart = () => {
  const listProducts = localStorage.getItem("products") || '[]';
  const [cart, setCart] = useState([]);
  let products = JSON.parse(listProducts);
  const handleRemoveProduct = () => {
    // const filtered = cart.filter(prd => prd.id === products.id);
    // localStorage.setItem('items', JSON.stringify(filtered));
    // if(filtered === 1){
    //   setCart(cart.filter(prd => prd.id === products.id));
    //   console.log(setCart)
    // } 
    
  }
  const handleAddProduct = () => {

  }


  useEffect(()=> {
    console.log('cart change');
  }, [cart]);
  return (
    <div>
      <div className=" mt-[89px] w-[60%] mx-auto ">
        {
            products.map((prd) => 
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
                            <button  onClick={()=> handleAddProduct(prd)}  className="px-4 py-2 border border-[#701313]  hover:bg-[#701313] hover:text-white ease duration-200">
                              +
                            </button>
                            <button onClick={()=> handleRemoveProduct(prd)} className="px-4 py-2 border border-[#701313] hover:bg-[#701313] hover:text-white ease duration-200 mr-5">
                              -
                            </button>
                          </div>
                          <div className="flex">
                            <p className="text-2xl">2 x ${prd.price}</p>
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
            products.length === 0 && 
            <p className="text-3xl text-center">No items are added</p>
         }
      </div>
      
    </div>
  );
};

export default Cart;
