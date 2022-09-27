import { Outlet, Link } from "react-router-dom";
import { Fragment } from "react";
import { ReactComponent as TruffLogo } from "../../assets/logo.svg";
import { useContext } from "react";
import { UserContext } from "../../contexts/user.contexts";
import {signOutUser} from '../../utilites/firebase/firebase.utilites'
import './nav.styles.scss'

const Nav = () => {

  const {currentUser} = useContext(UserContext);

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
                
              </div>
         </div>
          <Outlet/>
      </Fragment>
    );
  };

  export default Nav; 