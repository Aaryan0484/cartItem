// Inside Navbar Component
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import { ShopContext } from "../context/shop-context";
import "./navbar.css";

export class Navbar extends React.Component {
  
  render() {
    return (
      <div className="navbar">
        <div className="links">
          <Link to="/"> Shop </Link>
          <Link to="/cart" className="cart-link">
            <ShoppingCart size={32} />
            <CartCount />
          </Link>
        </div>
      </div>
    );
  }
}

const CartCount = () => {
  const { cartItems } = useContext(ShopContext);

  let count = 0;
  Object.values(cartItems).forEach((quantity) => {
    count += quantity || 0;
  });

  return count > 0 ? <span className="cart-count">{count}</span> : null;
};
