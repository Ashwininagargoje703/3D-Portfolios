import React from "react";

const Header = () => {
  return (
    <header>
      <a href="#" id="logo">
        <img
          src="/images/logo.png"
          width="70"
          height="70"
          alt="Creative Works Logo"
        />
      </a>
      <nav className="main-nav">
        <ul>
          <li>
            <a
              href="https://www.youtube.com/channel/UCWuY1s3_n_1teidTmRDkXtQ"
              target="_blank"
              rel="noreferrer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="24" height="24">
                <path d="M549.655 124.083..." />
              </svg>
              <span>Youtube</span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
