import React from "react";
import { Link } from "react-router-dom"
import { useSelector } from "react-redux";
import { selectMovies } from "../../features/allMovies/allMoviesSlice";
import RightSideNav from "../RightSideNav";

const Western = () => {

const western = useSelector(selectMovies)
  return (
		<div>No Western Movies yet
      {western.map((filter) => {
        if(filter.genre === 'Western'){
          return(
            <div>
               <Link to={`/movies/${filter.id}`}>
                    <img className="movieImage" src={filter.imageUrl} alt="" />
                    <h2 className="movieTitle">{filter.title}</h2>
                    <h2 className="moviePrice">
                      <small>${filter.price}</small>
                    </h2>
                    </Link>
            </div>
          )
        }
      })}
<RightSideNav/>
		</div>
	);
};

export default Western;
