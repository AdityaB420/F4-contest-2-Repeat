import React,{useState} from "react";
import logo from "../assets/logo.png";
import title from "../assets/logo-title.png";
import wishlist from "../assets/wishlist.png";
import notifications from "../assets/notifications.png";
import search from "../assets/search.png";
import diamond from "../assets/diamond.png";
import profile from "../assets/profile.png";



function Navbar({ onSearch }) {
    const [query,setQuery] =  useState("")

    const handleSearch = (e) => {
      e.preventDefault();
      onSearch({query});
    };
  return (
    <nav className="navbar">
      <div className="log-div">
        <img src={logo} alt="logo" className="logo image-nav" />
        <img src={title} alt="logo-name" className="logo-name image-nav" />
      </div>
      <form className="searchbar-div" onSubmit={handleSearch}>
        <div className="search-bar">
          <img src={search} alt="search" className="search-icon-img" />
          <input
            type="text"
            onChange={(e) => setQuery(e.target.value)}
            className="search-input"
            placeholder="Search for the book you want and read it now... Sherlock Holmes, Harry Pot..."
          />
        </div>
        <div className="search-button">
          <button className="search-btn">Search</button>
        </div>
      </form>
      <div className="icons-div">
        <div className="icon-div icon-div-1">
          <img src={wishlist} alt="book" className="book image-nav" />
        </div>
        <div className="icon-div icon-div-2">
          <img src={notifications} alt="notification" className="bell image-nav" />
        </div>
        <div className="icon-div icon-div-3">
          <img src={diamond} alt="pro" className="pro image-nav" />
        </div>
        <div className="icon-div icon-div-4">
          <img src={profile} alt="profile" className="profile image-nav" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;