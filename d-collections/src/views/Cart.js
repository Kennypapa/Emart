import {useEffect, useState } from "react";
const Cart = () => {
  const listProducts = localStorage.getItem("products") || '[]';
  const [cart, setCart] = useState([]);
  const [price, setPrice] = useState(0)
  let products = JSON.parse(listProducts);
  const handleChange = (products, d) => {
    const ind = cart.indexOf(products);
    const arr = cart;
    arr[ind].amount += d;

    if(arr[ind].amont === 0) arr[ind].amount = 1;
    setCart([...arr]);
  };

  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => (ans += item.amount) )
  }

  useEffect(()=> {
    console.log('cart change');
  }, [cart]);
  return (
    <div>
      <div className=" w-full mt-[89px] w-[60%] mx-auto">
        {
            products.map((prd)  => 
            (
                <div className="max-h-[300px] flex justify-center items-center " key={prd.id}>
                    <div className="lg:h-[300px] md:h-[400px] h-[370px] w-[600px] mr-6">
                      <img src={prd.image} alt={prd.title} className="w-full h-full object-contain" />
                    </div>
                    <div className="w-[90%]" >
                        <div> 
                            <p className="text-2xl w-[70%]">{prd.title}</p>
                        </div>
                        <div className="flex">
                            <p className="text-2xl">2 x ${prd.price}</p>
                            <p className="text-2xl">=$219</p>
                        </div>
                        <div className="flex">
                            <button onClick={()=> handleChange(prd, -1)} className="px-4 py-2 border border-[#701313] hover:bg-[#701313] hover:text-white ease duration-200 mr-5">
                                -
                            </button>
                            <button onClick={()=> handleChange(prd, -1)} className="px-4 py-2 border border-[#701313] hover:bg-[#701313] hover:text-white ease duration-200 mr-5">
                                
                            </button>
                            <button  onClick={()=> handleChange(prd, 1)}  className="px-4 py-2 border border-[#701313]  hover:bg-[#701313] hover:text-white ease duration-200">
                                +
                            </button>
                        </div>

                        <div>
                            <p>{price}</p>
                        </div>
                    </div>
                </div>
            ))
        }
      </div>
      <div>
         {
            products.length === 0 && 
            <p className="text-3xl text-center">No Products available...</p>
         }
      </div>
      
    </div>
  );
};

export default Cart;
