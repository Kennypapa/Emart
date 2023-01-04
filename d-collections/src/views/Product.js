import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cartActions } from "../store";
const Product = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setIsLoading] = useState(false);

  useEffect(() => {
    const getProducts = async () => {
      setIsLoading(true);
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      setProduct(await response.json());
      setIsLoading(false);
    };
    getProducts();
  }, [id]);

  const addItemHandler = () => {
    dispatch(cartActions.ADDITEM(product));
    let showCart = [];
    let showProducts = product;
    showCart.push(showProducts);
    showCart = showCart.concat(JSON.parse(localStorage.getItem('products') || '[]'));
    console.log(showCart);  

    localStorage.setItem('products', JSON.stringify(showCart));
  }



  return (
    <div>
      {loading ? (
        
        <div role="status" class="space-y-8 animate-pulse mt-[125px] w-full">
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
                <div class="lg:h-[500px] md:h-[450px] h-[370px]  lg:w-[500px] md:w-[450px] w-[370px] mx-auto bg-gray-300 rounded sm:w-96 dark:bg-gray-700 flex justify-center items-center">
                    <svg class="w-12 h-12 text-gray-200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" viewBox="0 0 640 512"><path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z"/></svg>
                </div>
                <div  className="h-[500px] lg:pl-0 pl-10 flex justify-start items-center">
                    <div class="w-full">
                        <div class="h-6 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-6"></div>
                        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5"></div>
                        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[280px] mb-2.5"></div>
                        <div class="h-[50px] w-[70px] bg-gray-200 rounded-sm dark:bg-gray-700 mb-2.5"></div>
                        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[440px] mb-2.5"></div>
                        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] mb-2.5"></div>
                        <div className="flex">
                        <div class="h-[40px] bg-gray-200 rounded-sm dark:bg-gray-700 w-[120px] mr-6"></div>
                        <div class="h-[40px] bg-gray-200 rounded-sm dark:bg-gray-700 w-[90px]"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div> 

      ) : (
        <div className="mt-[125px]"> 
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
            <div className="lg:h-[500px] md:h-[450px] h-[370px]  lg:w-[500px] md:w-[450px] w-[370px] mx-auto ">
              <img src={product.image} alt={product.title} className="w-full h-full" />
            </div>


            <div className="h-[500px] lg:pl-0 pl-10 flex justify-start items-center">
              <div>
                <p className="uppercase text-3xl font-bold font-[Poppins] mb-5">{product.category}</p>
                <p className="font-[Poppins] text-lg">{product.title}</p>
                <div className="flex justify-start items-center mb-4">
                  <p className="font-[Poppins] font-semibold">Rating {product.rating && product.rating.rate} </p>
                  <div className="ml-3">
                    <ul className="flex justify-start items-center">
                        <li><i class="fa-solid fa-star"></i></li>
                        <li><i class="fa-solid fa-star"></i></li>
                        <li><i class="fa-solid fa-star"></i></li>
                        <li><i class="fa-solid fa-star"></i></li>
                    </ul>
                  </div>
                </div>
                <div>
                    <p className="text-4xl font-semibold font-[Poppins]"><span className="border-y-2 border-black">${product.price}</span></p>
                </div> 
                <div className="mt-8 w-[90%] mb-4">
                    <p className="font-[Poppins] font-semibold text-sm">
                        {product.description}
                    </p>
                </div>
                <div>
                <button
                    type="button"
                    className="text-white mr-4 bg-[#701313] focus:ring-4 focus:outline-none focus:ring-white font-medium rounded-sm text-sm px-5 lg:py-2.5 py-2  text-center border border-white hover:bg-white hover:text-black  hover:border-[#701313]"
                    onClick={addItemHandler}
                >
                <i class="fa-solid fa-cart-shopping"></i>Add to Cart
                </button>
                <NavLink>
                    <button
                        type="button"
                        className="text-white bg-[#701313] focus:ring-4 focus:outline-none focus:ring-white font-medium rounded-sm text-sm px-5 lg:py-2.5 py-2  text-center border border-white hover:bg-white hover:text-black hover:border hover:border-[#701313]"
                    >
                    <i class="fa-solid fa-cart-shopping"></i>Cart
                    </button>
                </NavLink>
                </div>
              </div>
            </div>

          </div>
        </div>
      )}
    </div>
  );
};

export default Product;
