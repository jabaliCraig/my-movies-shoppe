import React from "react";
import { Link, useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux";
import { selectMovies } from "../../features/allMovies/allMoviesSlice";
import RightSideNav from "../RightSideNav";
import { addToCart } from "../../features/cartSlice";


const Comedy = () => {

const comedy = useSelector(selectMovies)
const dispatch = useDispatch()
const navigate = useNavigate();

const handleAddToCart = (filter) => {
  dispatch(addToCart(filter));
  navigate("/cart");
};
  return (
    <section className="container"
    ><h1 className="genre">No Comedy Movies yet </h1>
      {comedy.map((filter) => {
        if(filter.genre === 'Comedy'){
          return(
            <div className="card">
            <div className="card-image">
               <Link to={`/movies/${filter.id}`}>
                    <img className="movieImage" src={filter.imageUrl} alt="" />
                    <h2 className="movieTitle">{filter.title}</h2>
                    <h2 className="moviePrice">
                      <small>${filter.price}</small>
                    </h2>
                    </Link>
                    <button onClick={() => handleAddToCart(filter)}>
                      Add To Cart
                    </button>
                    </div>
            </div>
          )
        }
      })}
<RightSideNav/>
		</section>
	);
};

export default Comedy;
