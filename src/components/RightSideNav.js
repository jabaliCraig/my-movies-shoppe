import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectMovies } from "../features/allMovies/allMoviesSlice";
import Fantasy from "./allGenres/Fantasy";
import { Link } from "react-router-dom";

// The sideNav bar

const RightSideNav = () => {
  // const [filtered, setfilter] = useState([]);

  // console.log(fantasyMovie)
  return (
    <div className="container-sorted-movies">
      <h1>Sort Movies By!</h1>
      <div>
        <Link to="/fantasy">Fantasy</Link>
      </div>
      <div>
        <Link to="/actionadventure">Action/Adventure</Link>
      </div>
      <div>
        <Link to="/biographyhistorical">Biography/Historical</Link>
      </div>
      <div>
        <Link to="/comedy">Comedy</Link>
      </div>
      <div>
        <Link to="/documentary">Documentary</Link>
      </div>
      <div>
        <Link to="/drama">Drama</Link>
      </div>
      <div>
        <Link to="/familyanimated">Family/Animated</Link>
      </div>
      <div>
        <Link to="/horrorthriller">Horror/Thriller</Link>
      </div>
      <div>
        <Link to="/romance">Romance</Link>
      </div>
      <div>
        <Link to="/sciencefiction">Science Fiction</Link>
      </div>

      <div>
        <Link to="/western">Western</Link>
      </div>
    </div>
  );
};

export default RightSideNav;
