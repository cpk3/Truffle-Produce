import { Outlet, Link } from "react-router-dom";
import { Fragment } from "react";
import { ReactComponent as TruffLogo } from "../../assets/logo.svg";
import CartIcon from "../../components/cart-icon/cart-icon.componet";
import { useContext } from "react";
import { UserContext } from "../../contexts/user.contexts";
import {signOutUser} from '../../utilites/firebase/firebase.utilites'
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { CartContext, CartProvider } from "../../contexts/cart.context";
import './nav.styles.scss'

const Nav = () => {

  const {currentUser} = useContext(UserContext);
    const {isCartOpen}= useContext(CartContext)
    return (
      <Fragment>
        <div className="Navigation">
            <Link className="logo-link" to='/'>
                <TruffLogo className="logo"/>
            </Link>

            <div className="nav-links-container">
                <Link className="nav-link" to='/Shop'>SHOP
                </Link>
                {currentUser ? (<span onClick={signOutUser} className="nav-link">Sign Out</span>)
                : (<Link className="nav-link" to='/authentication'>Sign In</Link>)
                 }
              <CartIcon/>
            </div>
              {isCartOpen && <CartDropdown/>}
         </div>
          <Outlet/>
      </Fragment>
    );
  };

  export default Nav; 

  //&& is a truthy test = if both true = returns the dropdown. Functions always value = true 