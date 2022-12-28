import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "../assets/css/products.css";

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setIsLoading] = useState(false);
  // const [select, setSelect] = useState(data);
  let componentMounted = true;

  useEffect(() => {
    const getProducts = async () => {
      setIsLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        // setSelect(await response.json());
        console.log(filter);
        setIsLoading(false);
      }

      return () => {
        componentMounted = false;
      };
    };
    getProducts();
  }, []);

  const Loading = () => {
    return (
      <>
        <div
          role="status"
          className="p-4 rounded border border-gray-200 shadow animate-pulse md:p-6 w-[80%] mx-auto"
        >
          <div className="flex justify-center items-center mb-4 h-48  bg-gray-300 rounded dark:bg-gray-700">
            <svg
              className="w-12 h-12 text-gray-200 dark:text-gray-600"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 640 512"
            >
              <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" />
            </svg>
          </div>
          <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
          <div className="h-2 w-10 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
          <div className="h-9 w-24 bg-gray-200 rounded-lg dark:bg-gray-700 mb-2.5"></div>
          <span className="sr-only">Loading...</span>
        </div>
      </>
    );
  };
  const filterProduct = (cat) => {
    const updatedList = data.filter((prd) => prd.category === cat);
    console.log(updatedList);
    setFilter(updatedList);
  };
  return (
    <>
      <div>
        <div className="lg:w-[510px] md:w-[510px] w-full mx-auto border-l-4 border-l-[#701313]  pt-12 mb-10">
          <h1 className=" lg:text-4xl md:text-4xl sm:text-3xl text-2xl font-[Unbounded] text-left pl-2">
            Latest Products
          </h1>
        </div>
        <div className="ml-10">
          <label
            for="small"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Small select
          </label>
          <select
            id="small"
            class="block w-40 p-2 mb-6 text-sm text-white focus:ring-0  focus:border-0 focus:outline-none rounded-sm bg-[#701313]"
            onChange={(e) => {
              filterProduct(e.target.value);
            }}
          >
            <option value={()=>setFilter(data)}>All</option>
            <option value="men's clothing">Men's clothing</option>
            <option value="women's clothing">Women's clothing</option>
            <option value="jewelery">Jewelery</option>
            <option value="electronics">Electronic</option>
          </select>
        </div>
        <div>
          {loading ? (
            <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 w-full">
              {Array.from(Array(8), (e, key) => (
                <Loading />
              ))}
            </div>
          ) : (
            <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 w-full">
              {filter.map((product) => (
                <div
                  key={product.id}
                  className="bg-white border border-gray-200 w-[80%] rounded-lg ml-auto mr-auto shadow-md mb-5 product-cont ease-in-out duration-300"
                >
                  <div className="flex justify-center text-center items-center product-box overflow-hidden">
                    <a href="#">
                      <img
                        className="rounded-t-lg h-[250px] ease-in-out duration-300"
                        src={product.image}
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="p-5">
                    <a href="#">
                      <h5 className="mb-2 text-xl font-semibold tracking-tight text-[#701313]">
                        {product.title.substring(0, 12)}...
                      </h5>
                    </a>
                    <p className="mb-3 font-semibold text-[#701313]">
                      ${product.price}
                    </p>
                    <NavLink
                      to={`/products/${product.id}`}
                      className="ease-in-out duration-200 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg focus:ring-4 focus:outline-none buyBtn border"
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
                    </NavLink>
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
