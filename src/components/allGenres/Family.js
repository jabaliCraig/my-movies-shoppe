import React from "react";
import { Link } from "react-router-dom"
import { useSelector } from "react-redux";
import { selectMovies } from "../../features/allMovies/allMoviesSlice";
import RightSideNav from "../RightSideNav";

const Family = () => {

const family = useSelector(selectMovies)
  return (
		<div>No Family/Animated Movies yet
      {family.map((filter) => {
        if(filter.genre === 'Family/Animated'){
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

export default Family;
