import { useEffect, useState } from "react";
import '../assets/css/products.css';
const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setIsLoading] = useState(false);
  let componentMounted = true;

  useEffect(() => {
    const getProducts = async () => {
      setIsLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        console.log(filter);
        setIsLoading(false);
      }

      return () => {
        componentMounted = false;
      };
    };
    getProducts();
  }, []);

  return (
    <>
      <div>
        <div className="w-[500px] mx-auto border-l-4 border-l-[#701313]  pt-12">
          <h1 className=" text-4xl font-[Unbounded] text-left pl-2">
            Latest Products
          </h1>
        </div>
        <div>
          {loading ? (
            <div role="status" className="max-w-sm animate-pulse">
              <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
            </div>
          ) : (
            <div className="grid grid-cols-4 w-full">
              {filter.map((product) => (
                <div className="bg-white border border-gray-200 w-[300px] rounded-lg shadow-md mb-5 product-cont ease-in-out duration-300">
                  <div className="flex justify-center text-center items-center product-box overflow-hidden">
                     <a href="#">
                     <img className="rounded-t-lg h-[250px] ease-in-out duration-300" src={product.image} alt="" />
                     </a>
                  </div>
                  <div className="p-5">
                    <a href="#">
                      <h5 className="mb-2 text-xl font-semibold tracking-tight text-[#701313]">
                        {product.title.substring(0,12)}
                      </h5>
                    </a>
                    <p className="mb-3 font-semibold text-[#701313]">
                      ${product.price}
                    </p>
                    <a
                      href="#"
                      className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg focus:ring-4 focus:outline-none buyBtn border"
                    >
                       Buy Now
                      <svg
                        aria-hidden="true"
                        className="w-4 h-4 ml-2 -mr-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Products;
