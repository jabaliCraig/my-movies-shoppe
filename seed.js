const { db, User, Movie, Personnel, Order } = require('./server/db/index')

const users = [
	{
		email: 'craig@admin.mail',
		password: 'admin1',
		fName: 'Craig',
		lName: 'Smith',
		type: 'Admin'
	},
	{
		email: 'lai@admin.mail',
		password: 'admin2',
		fName: 'Lai',
		lName: 'Saechao-Bazemore',
		type: 'Admin'
	},
	{
		email: 'ron@admin.mail',
		password: 'admin3',
		fName: 'Ron',
		lName: 'Basnet',
		type: 'Admin'
	},
	{
		email: 'mohammad@admin.mail',
		password: 'admin4',
		fName: 'Mohammad',
		lName: 'Saad',
		type: 'Admin'
	},
	{
		email: 'jake@admin.mail',
		password: 'admin5',
		fName: 'Jake',
		lName: 'Curtis',
		type: 'Admin'
	},
	{
		email: 'luke@admin.mail',
		password: 'admin6',
		fName: 'Luke',
		lName: 'Jones',
		type: 'Admin'
	},
	{
		email: 'user1@customer.mail',
		password: 'password1',
		fName: 'Samwise',
		lName: 'Gamgee',
		type: 'customer'
	},
	{
		email: 'user2@customer.mail',
		password: 'password2',
		fName: 'Samuel',
		lName: 'Glamgy',
		type: 'customer'
	},
	{
		email: 'user3@customer.mail',
		password: 'password3',
		fName: 'Fred',
		lName: 'Bagson',
		type: 'customer'
	},
	{
		email: 'user4@customer.mail',
		password: 'password4',
		fName: 'Gerald',
		lName: 'Rivers',
		type: 'customer'
	},
	{
		email: 'user5@customer.mail',
		password: 'password5',
		fName: 'Jennifer',
		lName: 'Ventley',
		type: 'customer'
	},
	{
		email: 'user6@customer.mail',
		password: 'password6',
		fName: 'Arthur',
		lName: 'Kingsly',
		type: 'customer'
	},
	{
		email: 'user7@customer.mail',
		password: 'password7',
		fName: 'John',
		lName: 'Buckingham',
		type: 'customer'
	},
	{
		email: 'user8@customer.mail',
		password: 'password8',
		fName: 'Parker',
		lName: 'Peterson',
		type: 'customer'
	},
	{
		email: 'user9@customer.mail',
		password: 'password9',
		fName: 'Matt',
		lName: 'Wurst',
		type: 'customer'
	},
	{
		email: 'user10@customer.mail',
		password: 'password10',
		fName: 'Jane',
		lName: 'Fawning',
		type: 'customer'
	}
];

const movies = [
	{
		title: 'The Hobbit',
		genre: 'Fantasy',
		year: 1977,
		description: "A homebody hobbit in Middle Earth gets talked into joining a quest with a group of dwarves to recover their treasure from a dragon.",
		price: 27.99,
		imageUrl: 'https://m.media-amazon.com/images/M/MV5BNWEyOTlhNjMtZjNlMC00Y2QyLTljMjUtZjUzMzIyYTlmNjM1XkEyXkFqcGdeQXVyNjc5NjEzNA@@._V1_.jpg',
		inventory: 72
	},
	{
		title: 'The Lord of the Rings',
		genre: 'Fantasy',
		year: 1978,
		description: "The Fellowship of the Ring embark on a journey to destroy the One Ring and end Sauron's reign over Middle-earth.",
		price: 27.99,
		imageUrl: 'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_FMjpg_UX1000_.jpg',
		inventory: 72
	},
	{
		title: 'The Return of the King',
		genre: 'Fantasy',
		year: 1980,
		description: "Two Hobbits struggle to destroy the Ring in Mount Doom while their friends desperately fight evil Lord Sauron's forces in a final battle.",
		price: 27.99,
		imageUrl: 'https://m.media-amazon.com/images/M/MV5BMDc3NjZlMGQtYTAzZS00YWJhLTgwNWEtZTRlYzJkZWUzYzkwXkEyXkFqcGdeQXVyNjc5NjEzNA@@._V1_.jpg',
		inventory: 72
	},
	{
		title: 'The Lord of the Rings: The Fellowship of the Ring',
		genre: 'Fantasy',
		year: 2001,
		description: "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.",
		price: 27.99,
		imageUrl: 'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_.jpg',
		inventory: 72
	},
	{
		title: 'The Lord of the Rings: The Two Towers',
		genre: 'Fantasy',
		year: 2002,
		description: "While Frodo and Sam edge closer to Mordor with the help of the shifty Gollum, the divided fellowship makes a stand against Sauron's new ally, Saruman, and his hordes of Isengard.",
		price: 27.99,
		imageUrl: 'https://m.media-amazon.com/images/M/MV5BZGMxZTdjZmYtMmE2Ni00ZTdkLWI5NTgtNjlmMjBiNzU2MmI5XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg',
		inventory: 72
	},
	{
		title: 'The Lord of the Rings: The Return of the King',
		genre: 'Fantasy',
		year: 2003,
		description: "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
		price: 27.99,
		imageUrl: 'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg',
		inventory: 72
	},
	{
		title: 'The Hobbit: An Unexpected Journey',
		genre: 'Fantasy',
		year: 2012,
		description: "A reluctant Hobbit, Bilbo Baggins, sets out to the Lonely Mountain with a spirited group of dwarves to reclaim their mountain home, and the gold within it from the dragon Smaug.",
		price: 27.99,
		imageUrl: 'https://m.media-amazon.com/images/M/MV5BMTcwNTE4MTUxMl5BMl5BanBnXkFtZTcwMDIyODM4OA@@._V1_FMjpg_UX1000_.jpg',
		inventory: 72
	},
	{
		title: 'The Hobbit: The Desolation of Smaug',
		genre: 'Fantasy',
		year: 2013,
		description: "The dwarves, along with Bilbo Baggins and Gandalf the Grey, continue their quest to reclaim Erebor, their homeland, from Smaug. Bilbo Baggins is in possession of a mysterious and magical ring.",
		price: 27.99,
		imageUrl: 'https://m.media-amazon.com/images/M/MV5BMzU0NDY0NDEzNV5BMl5BanBnXkFtZTgwOTIxNDU1MDE@._V1_.jpg',
		inventory: 72
	},
	{
		title: 'The Hobbit: The Battle of the Five Armies',
		genre: 'Fantasy',
		year: 2014,
		description: "Bilbo and company are forced to engage in a war against an array of combatants and keep the Lonely Mountain from falling into the hands of a rising darkness.",
		price: 27.99,
		imageUrl: 'https://m.media-amazon.com/images/M/MV5BMTYzNDE3OTQ3MF5BMl5BanBnXkFtZTgwODczMTg4MjE@._V1_.jpg',
		inventory: 72
	},
	{
		title: 'The Lord of the Rings: The Rings of Power (Season 1)',
		genre: 'Fantasy',
		year: 2022,
		description: "Epic drama set thousands of years before the events of J.R.R. Tolkien's 'The Hobbit' and 'The Lord of the Rings' follows an ensemble cast of characters, both familiar and new, as they confront the long-feared re-emergence of evil to Middle-earth.",
		price: 72.99,
		imageUrl: 'https://m.media-amazon.com/images/M/MV5BNTg3NjcxYzgtYjljNC00Y2I2LWE3YmMtOTliZTkwYTE1MmZiXkEyXkFqcGdeQXVyNTY4NDc5MDE@._V1_.jpg',
		inventory: 27
	},
	{
		title: 'VeggieTales: Lord of the Beans',
		genre: 'Fantasy',
		year: 2005,
		description: "A lesson in using your gifts told in a manner of JRR Tolkien's classic 'The Lord of the Rings.'",
		price: 17.99,
		imageUrl: 'https://m.media-amazon.com/images/M/MV5BODk3NzA1MjI2M15BMl5BanBnXkFtZTcwMjg4NDUzMQ@@._V1_.jpg',
		inventory: 71
	},
];

const personnel = [
	{
    fName: 'Elijah',
    lName: 'Wood',
    type: 'Actor',
    details: 'Lorem Ipsum is a place holder text. While the classic lorem works very well, if you want some spicier alternatives we are serving those as well right here. This is our Hodor Ipsum Generator. Hodor, originally named Wylis,was a simpleminded servant of House Stark at Winterfell working in the stables in HBO series Game of Thrones. This generator generates Hodor Ipsum. Out of all the Lorem generators this one is the toughest to crack ;). It is time to get rid of your old boring placeholder texts!',
	// imageUrl: './assets/personnelImg/elijahWood.jpg',
  },
  {
    fName: 'Cate',
    lName: 'Blanchett',
    type: 'Actor',
    details: 'Lorem Ipsum is a place holder text. While the classic lorem works very well, if you want some spicier alternatives we are serving those as well right here. This is our Hodor Ipsum Generator. Hodor, originally named Wylis,was a simpleminded servant of House Stark at Winterfell working in the stables in HBO series Game of Thrones. This generator generates Hodor Ipsum. Out of all the Lorem generators this one is the toughest to crack ;). It is time to get rid of your old boring placeholder texts!',
	// imageUrl: './assets/personnelImg/cateBlanchett.jpg',
  }
];

const orders = [
	{
		status: 'Bought'
	},
	{
		status: 'Bought'
	},
	{
		status: 'Bought'
	},
	{
		status: 'In Cart'
	},
	{
		status: 'Bought'
	},
	{
		status: 'In Cart'
	},
]

const seed = async () => {
  try {
    await db.sync();
		await Promise.all(users.map(user => {
  		return User.create(user);
		}));
		await Promise.all(movies.map(movie => {
			return Movie.create(movie);
		}));
		await Promise.all(personnel.map(person => {
			return Personnel.create(person);
		}));
		await Promise.all(orders.map(order => {
			return Order.create(order);
		}));
		//Craig, going off of: https://sequelize.org/docs/v6/advanced-association-concepts/advanced-many-to-many/
		const Blanchett = await (Personnel.findOne({
			where: {
				fName: 'Cate',
				lName: 'Blanchett'
			}
		}))
		const GOAT = await (Personnel.findOne({
			where: {
				fName: 'Elijah',
				lName: 'Wood'
			}
		}))
		const FotR = await (Movie.findOne({
			where: {
				title: 'The Lord of the Rings: The Fellowship of the Ring',
			}
		}))
		const tTT = await (Movie.findOne({
			where: {
				title: 'The Lord of the Rings: The Two Towers'
			}
		}))
		const tRotK = await (Movie.findOne({
			where: {
				title: 'The Lord of the Rings: The Return of the King'
			}
		}))
		await Blanchett.setMovies([FotR, tTT, tRotK]);
		await GOAT.setMovies([FotR, tTT, tRotK]);
		const user1 = await (User.findOne({
			where: {
				email: 'user1@customer.mail'
			}
		}));
		const user2 = await (User.findOne({
			where: {
				email: 'user2@customer.mail'
			}
		}));
		const user3 = await (User.findOne({
			where: {
				email: 'user3@customer.mail'
			}
		}));
		const order1 = await (Order.findOne({
			where: {
				id: 1,
			}
		}));
		const order2 = await (Order.findOne({
			where: {
				id: 2,
			}
		}));
		const order3 = await (Order.findOne({
			where: {
				id: 3,
			}
		}));
		const order4 = await (Order.findOne({
			where: {
				id: 4,
			}
		}));
		const order6 = await (Order.findOne({
			where: {
				id: 6,
			}
		}));
		const order5 = await (Order.findOne({
			where: {
				id: 5,
			}
		}));
		// await GOAT.setMovies([FotR, tTT, tRotK]);
		await user2.addOrders([order1, order2, order3, order4]);
		await user1.addOrders([order6]);
		await user3.addOrders([order5]);
		//Log happy message if seed is successful:
		console.log('🌰➤Seeding success!➤🌳')
    db.close()
  }
  catch (err) {
    console.error('You might need a bigger boat -- something went wrong!')
    console.error(err)
    db.close()
  }
}

seed();
