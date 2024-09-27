import React from "react";
import { Link } from "react-router-dom";
import { DisplayOrNone } from "./conditional_renderers";
import { Context } from "../store/appContext";
import { useContext } from "react";
import Gamepedia from "../../img/Gamepedia.png"

export const Navbar = () => {
  const { store } = useContext(Context)
  console.log("USER: ", store.user)
  const isLoggedIn = () => store.user !== null;
  return (
    <div className="main-div">



      <nav className="navbar navbar-expand-lg navbar-dark bg-dark"> {/* Dark background */}

        <div className="container-fluid">
          {/* Left Side */}
          <div
            className="left-div"
            style={{ display: 'flex', alignItems: 'center', border: 'none' }}
          >
            <Link
              className="btn btn-secondary"

              to="/"
              style={{
                marginRight: '15px',  padding: '10px 20px',
                fontSize: '2.25rem', height:'100px', width: '200px'
              }}
            >
              <img src={Gamepedia} alt="Gamepedia Logo" style={{  width: '200px', height: '125px', margin: '-25px' }} />
            </Link>
            <div
              className="dropdown"
              style={{ marginRight: '15px' }}
            >

            </div>
            <Link
              className="btn btn-secondary"
              to="/favorites"
              style={{ marginRight: '15px', backgroundColor: '#6c757d', borderColor: '#6c757d' }}
            >
              Favorites
            </Link>
          </div>

          {/* Right Side */}
          {store.user && (
            <h1 className="text-danger">Welcome {store.user?.email}</h1>
          )}
          <div className="right-div" style={{ display: 'flex', alignItems: 'center' }}>
            <Link
              to="/signup"
              className="btn btn-secondary"
              style={{ marginRight: '15px', backgroundColor: '#6c757d', borderColor: '#6c757d' }}
            >
              Sign Up
            </Link>
            <Link
              to="/Login" className="btn btn-secondary"
              style={{ backgroundColor: '#6c757d', borderColor: '#6c757d' }}
            // onClick={setFavorite}>
            //   {addFavorite ? "Remove from Favorites" : "Add to Favorites"}
            >
              {isLoggedIn() ? "Logout" : "Login"}
            </Link>
          </div>
        </div>
      </nav >
    </div >

  );
};

