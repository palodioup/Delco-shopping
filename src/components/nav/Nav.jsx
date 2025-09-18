import React, {useContext} from "react";
import { IoBagOutline } from "react-icons/io5";
import logoImg from "../../assets/logoipsum-368.png";
import { Link } from "react-router-dom"
import { CartContext } from "../../code/ContaxtProvider";

const Nav = () => {
  const { cart } = useContext(CartContext)
 
  return (
    <header className="font-jost text-black w-[100%] fixed bg-gray-200 top-0">
      <nav className="p-8 w-[100%] flex items-center justify-between">
        <div>
          <Link to="/">
            <img src={logoImg} alt="" className="size-12" />
          </Link>
          <p className="text-lg">Delco</p>
        </div>
        <ul className="flex items-center">
          <li>
            <Link to="/cart">
              <div className="flex">
                <IoBagOutline className="size-5"/>
                <p>{cart.length}</p>
              </div>
            </Link>
          </li>

        </ul>
      </nav>
    </header>
  );
};

export default Nav;
