import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { editMovieAsync } from '../features/allMovies/allMoviesSlice';
import { fetchSingleMovieAsync, selectSingleMovie } from '../features/singleMovieSlice';


const EditMovie = ({ id }) => {
  	const dispatch = useDispatch();
		const navigate = useNavigate();
		const movie = useSelector(selectSingleMovie)

		// useEffect(() => {
		// 	dispatch(fetchSingleMovieAsync(id))
		// }, [dispatch])

		//⬇️DON'T UPDATE THE `allowedGenres` ARRAY WITHOUT ALSO CHANING THE INPUT STRING ON ENUM ON ./server/db/models/Movie.js &AND& THE `allowedGenres` ARRAY IN ./src/components/AddMovie.js❗️
		const allowedGenres = ['Action/Adventure', 'Biography/Historical', 'Comedy', 'Documentary', 'Drama', 'Family/Animated', 'Fantasy', 'Horror/Thriller', 'Romance', 'Science Fiction', 'Western']
		//⬆️DON'T UPDATE THE `allowedGenres` ARRAY WITHOUT ALSO CHANING THE INPUT STRING ON ENUM ON ./server/db/models/Movie.js &AND& THE `allowedGenres` ARRAY IN ./src/components/AddMovie.js❗️

		//set local state variables for each part of the form
		const [title, setTitle] = useState('');
		const [genre, setGenre] = useState('');
		const [year, setYear] = useState('');
		const [description, setDescription] = useState('');
		const [price, setPrice] = useState(.01);
		const [inventory, setInventory] = useState(0);
		const [imageUrl, setImageUrl] = useState('');
		//define a function for submitting that takes in the event object as a parameter; this function will...
		const onSubmit = (e)=> {
			//...prevent the submit from loading a new page
			e.preventDefault();
			//...verify that all *required* fields are filled out
			if(!title/* || !lastName || !email*/) {
				alert('All required fields must be completed: Title, Genre, Year, Description, Price');
				return
			}
			if(!allowedGenres.includes(genre)) {
				alert('The genre entered does not match a genre in the database - please enter a valid genre');
				return
			}
			if(year < 1888) {//IS THERE A WAY TO KNOW THE CURRENT YEAR TO CHECK IF THIS IS BETWEEN 1888 AND NOW+1❔❔❔❔❔❔❔❔❔❔
				alert('The year must be an integer value between 1888 and the current year - please enter a valid year');
				return
			}
			if(!Number.isInteger(price*100)) {
				alert('Please enter the price as a plain number (without symbols) and no more than two decimal place values');
				return
			}
			if(!Boolean(new URL(imageUrl))) {//check valid imageUrl
				alert('The URL entered is invalid; please enter a valid URL for the movie');
				return
			}

			//...create a new object from input fields (stored from the form as state variables)
			const updatedMovie = { id, title, genre, year, description, price, inventory, imageUrl }
			dispatch(editMovieAsync(updatedMovie))
			//...and reset the form
			setTitle('');
			setGenre('');
			setYear('');
			setDescription('');
			setPrice('');
			setInventory('');
			setImageUrl('');
		}

  return(
    <form 
		  className='edit-form' 
			onSubmit={onSubmit}
		>
			<div className='form-control'>
				<label>
						<span style={{fontWeight: 'bold'}}>Current Movie Name:</span> 
						<small>{movie.name}</small>
				</label>
				<input 
				  type='text' 
					placeholder='**REQUIRED**' 
					value={title} 
					onChange={(e)=> setTitle(e.target.value)} 
			  />
			</div>
			<div className='form-control'>
				<label>
						<span style={{fontWeight: 'bold'}}>Current Movie Genre:</span> 
						<small>{movie.genre}</small>
				</label>
				{/* //THIS NEEDS TO BE A DROP-DOWN SELECTION MENU❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️ */}
				<input 
				  type='text' 
					placeholder='**REQUIRED**' 
					value={genre} 
					onChange={(e)=> setGenre(e.target.value)} 
				/>
			</div>
			<div className='form-control'>
				<label>
						<span style={{fontWeight: 'bold'}}>Current Movie Year:</span> 
						<small>{movie.year}</small>
				</label>
				<input 
				  type='text' 
					placeholder='**REQUIRED**' 
					value={year} 
					onChange={(e)=> setYear(e.target.value)} 
				/>
			</div>
			<div className='form-control'>
				<label>
						<span style={{fontWeight: 'bold'}}>Current Movie Description:</span> 
						<small>{movie.description}</small>
				</label>
				<input 
				type='text' 
				placeholder='(optional)' 
				value={description} 
				onChange={(e)=> setDescription(e.target.value)} 
			/>
			</div>
			<div className='form-control'>
				<label>
						<span style={{fontWeight: 'bold'}}>Current Movie Price:</span> 
						<small>{movie.price}</small>
				</label>
				<input 
				  type='text' 
					placeholder='**REQUIRED**' 
					value={price} 
					onChange={(e)=> setPrice(e.target.value)} 
				/>
			</div>
			<div className='form-control'>
				<label>
						<span style={{fontWeight: 'bold'}}>Current Movie Inventory:</span> 
						<small>{movie.inventory}</small>
				</label>
				<input 
				type='text' 
				placeholder='(optional)' 
				value={inventory} 
				onChange={(e)=> setInventory(e.target.value)} 
			/>
			</div>
			<div className='form-control'>
				<label>
						<span style={{fontWeight: 'bold'}}>Current Movie Image URL:</span> 
						<small>{movie.imageUrl}</small>
				</label>
				<input 
				  type='text' 
					placeholder='(optional)' 
					value={imageUrl} 
					onChange={(e)=> setImageUrl(e.target.value)} 
				/>
			</div>
			{/*...and a submit button down at the very bottom🔘 */}
			<input 
			  type='submit' 
				value='Save' 
			/>
		</form>
  )
}

export default EditMovie;