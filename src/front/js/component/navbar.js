import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext"; // Import your global context

export const Navbar = () => {
  const { store, actions } = useContext(Context);  // Access store and actions from context
  const isLoggedIn = !!store.user;  // Assuming 'store.user' contains logged-in user's info
  const username = store.user ? store.user.name : "";  // Get the username if available

  return (
    <div className="main-div">
      <h1>ThunderCats</h1>

      <nav className="navbar navbar-expand-lg navbar-dark bg-dark"> {/* Dark background */}
        <div className="container-fluid">
          {/* Left Side */}
          <div className="left-div" style={{ display: 'flex', alignItems: 'center' }}>
            <button
              className="btn btn-secondary"
              style={{ marginRight: '15px', backgroundColor: '#6c757d', borderColor: '#6c757d' }}
            >
              Home
            </button>
            <div className="dropdown" style={{ marginRight: '15px' }}>
              <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                id="dropdownMenuButtonDark"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Categories
              </button>
              <ul className="dropdown-menu dropdown-menu-dark">
                <li><a className="dropdown-item" id="actionGames" href="#">Action</a></li>
                <li><a className="dropdown-item" id="roleplayingGames" href="#">RPG</a></li>
                <li><a className="dropdown-item" id="strategy" href="#">Strategy</a></li>
              </ul>
            </div>
            <button
              className="btn btn-secondary"
              style={{ marginRight: '15px', backgroundColor: '#6c757d', borderColor: '#6c757d' }}
            >
              Favorites
            </button>
          </div>

          {/* Right Side */}
          <div className="right-div" style={{ display: 'flex', alignItems: 'center' }}>
            {isLoggedIn ? (
              // If logged in, show "Welcome, Username"
              <span className="navbar-text" style={{ marginRight: '15px', color: '#fff' }}>
                Welcome, {username}
              </span>
            ) : (
              // If not logged in, show Sign Up and Login buttons
              <>
                <Link
                  to="/signup"
                  className="btn btn-secondary"
                  style={{ marginRight: '15px', backgroundColor: '#6c757d', borderColor: '#6c757d' }}
                >
                  Sign Up
                </Link>
                <Link
                  to="/login"
                  className="btn btn-secondary"
                  style={{ backgroundColor: '#6c757d', borderColor: '#6c757d' }}
                >
                  Login
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};
