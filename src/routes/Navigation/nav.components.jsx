import { Outlet, Link } from "react-router-dom";
import { Fragment } from "react";
import { ReactComponent as TruffLogo } from "../../assets/logo.svg";
import './nav.styles.scss'

const Nav = () => {
    return (
      <Fragment>
        <div className="Navigation">
            <Link className="logo-link" to='/'>
                <TruffLogo className="logo"/>
            </Link>

            <div className="nav-links-container">
                <Link className="nav-link" to='/Shop'>SHOP
                </Link>
                <Link className="nav-link" to='/authentication'>Sign In
                </Link>
              </div>
         </div>
          <Outlet/>
      </Fragment>
    );
  };

  export default Nav; 