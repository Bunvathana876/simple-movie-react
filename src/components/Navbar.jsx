import { useState } from "react";
import "../css/Navbar.css";
import { CiSearch } from "react-icons/ci";
import { MdMovie } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
function Navbar() {
  const [isSearchOpen, setSearchOpen] = useState(false);

  return (
    <nav>
      <a className="logo" href="#">
        <MdMovie className="logo-icon" />
        <span> <a href="/">MovieFull</a></span>
      </a>
      <ul className="nav-link">
        <li>
          <a href="/home">Home</a>
        </li>
        <li>
          <a href="/movies">Movie</a>
        </li>
        <li>
          <a href="/Tv">Tv Show</a>
        </li>
        <li>
          <a href="#">Primiun</a>
        </li>
      </ul>

      <div className="search">
        {isSearchOpen && (
          <input
            type="text"
            className="search-input"
            placeholder="Search Movie"
          />
        )}
        <button
          className="search-btn"
          onClick={() => setSearchOpen(!isSearchOpen)}
        >
          {isSearchOpen ? (
            <IoMdClose className="search-icon" />
          ) : (
            <CiSearch className="search-icon" />
          )}
        </button>

        <a href="#" className="login">
          Login
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
