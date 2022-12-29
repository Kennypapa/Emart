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
  }, []);

  const addItemHandler = (state) => {
    dispatch(cartActions.ADDITEM(product))
  }

  return (
    <div>
      {loading ? (
        <div>Loading....</div>
      ) : (
        <div className="mt-[89px]"> 
          <div className="grid lg:grid-cols-2 grid-cols-1 gri gap-5">
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
