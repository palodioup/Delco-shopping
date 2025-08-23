import React, {useContext} from "react";
import { FaTruck } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { IoBagOutline } from "react-icons/io5";
import logoImg from "../../assets/logoipsum-368.png";
import { CiUser } from "react-icons/ci";
import { Link } from "react-router-dom"
import { CartContext } from "../../code/ContaxtProvider";

const Nav = () => {
  const {cart} = useContext(CartContext)
 
  return (
    <header className="bg-gray-900 text-white w-[100%]">
      <div className="p-5 w-[100%] flex items-center border-b-2 border-white">
        <div>
          <FaTruck className="size-7" />
        </div>
        <p className="ml-5">FREE shipping when upto £750</p>
      </div>
      <nav className="p-10 w-[100%] flex items-center justify-between">
        <div>
          <img src={logoImg} alt="" className="size-12" />
          <p className="text-lg">Delco</p>
        </div>
        <div className="flex bg-white text-black p-2 border-1 rounded-2xl ml-10">
          <input
          type="text"
          placeholder="Enter product name"
          autoComplete="off"
          className="border-1 rounded-2xl p-4 ml-2"
        />
        <button className="ml-5 bg-blue-800 text-white border-0.5 rounded-2xl p-3.5 mr-1">Search</button>
        </div>
        <ul className="flex items-center">
          <span className="flex mr-12 ml-5">
            <li className="bg-white flex justify-center items-center mr-2 border-0.5 rounded-xl p-1">
            <CiUser className="size-5 border-0.5 rounded-xl text-blue-800"/>
           </li>
          <p>Hello</p>
          </span>
          <li>
            <CiHeart className="size-5 mr-5"/>
          </li>
          <li>
            <Link to="../../pages/cart.jsx">
              <IoBagOutline className="size-5"/>
              {cart.length}
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
