import "../assets/css/navbar.css";
// import "../assets/js/main.js";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  const showCart = useSelector((state) => state);
  return (
    <nav
      className="lg:h-[90px] md:h-[auto] sm:h-auto h-[90px] py-4 px-0 fixed w-full z-20 top-0 left-0 border-b border-gray-200"
      id="navbar"
    >
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <NavLink to="/" className="flex items-center lg:pl-14 pl-4">
          <i class="fa-solid fa-cart-shopping text-[#701313]"></i>
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white pl-2">
            D-COLLLECTION
          </span>
        </NavLink>
        <div className="flex md:order-2 justify-end items-center lg:w-auto md:w-full lg:mr-0 mr-3 mt-2">
          <button
            type="button"
            className="text-white  bg-transparent focus:ring-4 focus:outline-none focus:ring-white font-medium rounded-lg text-sm px-5 lg:py-2.5 py-2 text-center border border-white hover:bg-white hover:text-black mr-3"
          >
            Login <i class="fa-solid fa-right-to-bracket"></i>
          </button>
          <NavLink to="/cart">
            <button
              type="button"
              className="text-white  bg-transparent focus:ring-4 focus:outline-none focus:ring-white font-medium rounded-lg text-sm px-5 lg:py-2.5 py-2  text-center border border-white hover:bg-white hover:text-black"
            >
              <i class="fa-solid fa-cart-shopping"></i>Cart({showCart.length})
            </button>  
          </NavLink>
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul
            id="myDIV"
            className="myDIV flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 lg:mr-0 mr-3"
          >
            <li>
              <NavLink
                to="/"
                className="block navBtn  py-2 pl-3 pr-4 rounded hover:bg-gray-100  text-[#701313]  md:p-0  text-base"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/products"
                className="block navBtn  py-2 pl-3 pr-4 rounded hover:bg-gray-100  text-[#701313]  md:p-0  text-base"
              >
                Products
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about-us"
                className="block navBtn  py-2 pl-3 pr-4 rounded hover:bg-gray-100  text-[#701313]  md:p-0  text-base"
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className="block navBtn py-2 pl-3 pr-4 rounded hover:bg-gray-100  text-[#701313]  md:p-0  text-base"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
