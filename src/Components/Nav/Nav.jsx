import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Nav() {

  // State to track if the user has scrolled past a certain point
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Function to handle scroll events and update the `scrolled` state
    const handleScroll = () => {
      setScrolled(window.scrollY > 500); // Set `scrolled` to true if scroll position is greater than 500
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* Navigation bar */}
      <nav className={`navbar navbar-expand-lg custom-nav position-fixed w-100 ${scrolled ? "black-theme" : "white-theme"
        }`}>
        <div className="container-fluid d-flex justify-content-between align-items-center">
          {/* Logo with a link to the home page */}
          <Link to='/' className="logo navbar-brand" onClick={() => window.location.reload()}>Fly<span>To</span></Link>

          <div className="d-flex align-items-center">
            {/* Search icon to trigger the search modal */}
            <i className="bi bi-search search-icon me-2 " type="button" data-bs-toggle="modal" data-bs-target="#searchModal"></i>
            {/* Navbar toggler for mobile view */}
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
        </div>

        {/* Collapsible navigation menu */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav align-items-center ">
            {/* Navigation links */}
            <li className="nav-item"><Link to="/">Home</Link></li>
            <li className="nav-item"><Link to='/about'>About</Link></li>
            <li className="nav-item"><Link to='contact'>Contact</Link></li>
          </ul>
        </div>
      </nav>

      {/* Search modal */}
      <div className="modal fade" id="searchModal" tabIndex="-1" aria-labelledby="searchModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content bg-dark text-white">
            {/* Modal header */}
            <div className="modal-header border-0">
              <h5 className="modal-title" id="searchModalLabel">Search</h5>
              {/* Close button for the modal */}
              <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            {/* Modal body with a search input */}
            <div className="modal-body">
              <div className="input-group modal-input">
                <input type="text" className="form-control" placeholder="Search here..." />
                <span className="input-group-text bg-white"><i className="bi bi-search text-dark"></i></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Nav;
