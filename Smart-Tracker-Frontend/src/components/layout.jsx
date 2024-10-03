import React, { useEffect } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useState } from "react";

function Layout() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const logOut = () => {
    localStorage.removeItem("userId");
    console.log(localStorage.getItem("userId"));
    navigate("/");
    window.location.reload();
  };

  useEffect(() => {
    if (localStorage.getItem("userId")) {
      setIsLoggedIn(true);
    }
    console.log(localStorage.getItem("userId"));
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className="bg-green-200 text-black p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <img src="logo for project.jpg"
            alt="Expense Era Logo"
            className="h-20 w-20 mr-2"
            Link= "/home"
            />
            <div className="text-2xl font-bold text-black">Expense Era</div>
          </div>
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="hover:text-green-600">
              Home
            </Link>
            <Link to="/about" className="hover:text-green-600">
              About
            </Link>
            <Link to="/services" className="hover:text-green-600">
              Services
            </Link>
            <Link to="/contact" className="hover:text-green-600">
              Contact
            </Link>
            <Link to="/budget" className="hover:text-green-600">
            Budget
            </Link>

            {isLoggedIn ? (
              <>
                <Link onClick={logOut} className="hover:text-green-600">
                  Log Out
                </Link>
              </>
            ) : (
              <>
                <Link to="/signup" className="hover:text-green-600">
                  Signup
                </Link>
                <Link to="/login" className="hover:text-green-600">
                  Login
                </Link>
              </>
            )}
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-platinum focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link
                to="/"
                  className="block px-3 py-2 rounded-md text-base font-medium hover:text-green-600"
              >
                Home
              </Link>
              <Link
                to="/about"
                  className="block px-3 py-2 rounded-md text-base font-medium hover:text-green-600"
              >
                About
              </Link>
              <Link
                to="/services"
                className="block px-3 py-2 rounded-md text-base font-medium hover:text-green-600"
              >
                Services
              </Link>
              <Link
                to="/contact"
                className="block px-3 py-2 rounded-md text-base font-medium hover:text-green-600"
              >
                Contact
              </Link>
              <Link
                to="/budget"
                className="block px-3 py-2 rounded-md text-base font-medium hover:text-green-600"
              >
                Budget
              </Link>

              {isLoggedIn ? (
                <>
                  <Link
                    onClick={logOut}
                    className="block px-3 py-2 rounded-md text-base font-medium hover:text-green-600"
                  >
                    Log out
                  </Link>
                </>
              ) : (
                <>
                  <Link
                    to="/signup"
                    className="block px-3 py-2 rounded-md text-base font-medium hover:text-green-600"
                  >
                    Sign Up
                  </Link>
                  <Link
                    to="/login"
                    className="block px-3 py-2 rounded-md text-base font-medium hover:text-green-600"
                  >
                    Login
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </nav>

      <main>
        <Outlet />
      </main>
      <footer className="bg-green-300 text-black py-10  ">
        <div className="container mx-auto text-center">
          <div className="flex justify-center space-x-6 mb-4">
           
            <Link to="/" className="hover:text-green-600">
              Home
            </Link>
            <Link to="/about" className="hover:text-green-400">
              About
            </Link>
            <Link to="/services" className="hover:text-green-400">
              Services
            </Link>
            <Link to="/contact" className="hover:text-green-400">
              Contact
            </Link>
            <Link to="/budget" className="hover:text-green-400">
            </Link>
            <Link to="/signup" className="hover:text-green-400">
              Signup
            </Link>
            <Link to="/login" className="hover:text-green-400">
              Login
            </Link>
            
          </div>
          <div className="flex justify-center space-x-6 mb-4">
            
            <a href="#" className="hover:text-green-400">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.04c-5.5 0-9.96 4.46-9.96 9.96 0 4.41 3.6 8.06 8.19 8.94v-6.34h-2.46v-2.6h2.46v-1.98c0-2.43 1.48-3.76 3.64-3.76 1.04 0 1.93.08 2.19.11v2.54h-1.5c-1.18 0-1.41.56-1.41 1.38v1.81h2.82l-.37 2.6h-2.45v6.34c4.59-.88 8.19-4.53 8.19-8.94 0-5.5-4.46-9.96-9.96-9.96z" />
              </svg>
            </a>
          </div>
          <p className="text-sm">
            &copy; 2023 Your Company. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Layout;
