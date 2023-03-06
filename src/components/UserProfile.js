import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import Nav from "./Nav";
import Movies from "./Movies";
import SingleMovie from "./SingleMovie";
import Personnel from "./Personnel";
import SinglePerson from "./SinglePerson";
import Admin from "./Admin";
import Users from "./Users";
import Cart from "./Cart";
import Orders from "./Orders";
import LeftSideNav from "./LeftSideNav";
import LogIn from "./LogIn";
import NoPage from "./NoPage";
import { fetchSpecificUserAsync, selectSpecificUser }  from "../features/specificUserSlice";
// const userDummy = {
// 		email: 'user1@customer.mail',
// 		password: 'password1',
// 		fName: 'Samwise',
// 		lName: 'Gamgee',
// 		type: 'customer'
// }

const UsersProfile = () => {
	const dispatch = useDispatch()
	const { id } = useParams()
	// const [user, setUser] = useState(userDummy)
	const user = useSelector(selectSpecificUser)

	useEffect(() => {
		dispatch(fetchSpecificUserAsync(id))
	}, [dispatch])


  return (
	<div>Welcome to your User Profile
		<h1>{user.fName} {user.lName}</h1>
		<h2>{user.email}</h2>
		<h3><LeftSideNav/></h3>
		</div>)
};

export default UsersProfile;
