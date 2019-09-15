// import { createConnection, Connection } from 'mysql2';


// async function main() {
// 	const conn = await connectDB();

// 	await createUsersTable(conn);
// 	await insertUsers(conn);
// 	// await getUsers(conn);
// }

// async function connectDB() {
// 	const connection: Connection = await createConnection({
// 		host: 'localhost',
// 		user: 'lameck',
// 		password: 'GUERRAcivil',
// 		database: 'simpleDB'
// 	});

// 	if (connection) {
// 		console.log('MYSQL Connected');
// 	}

// 	return connection;
// }

// async function createUsersTable(conn: Connection) {
// 	try {
// 		const [rows, fields] = await conn.execute(
// 			'CREATE TABLE IF NOT EXISTS `Users` (`id` INT AUTO_INCREMENT,`name` VARCHAR(150) NOT NULL,`createdAt` TIMESTAMP NOT NULL DEFAULT current_timestamp, PRIMARY KEY (id))'
// 		);

// 		console.log('TABLE CREATED');
// 		// console.dir(rows, fields);
// 	} catch (e) {
// 		console.error(e);
// 	}
// }

// async function insertUsers(conn: Connection) {
// 	try {
// 		const [rows, fields] = await conn.query(
// 			'INSERT INTO Users(name) VALUES ?',
// 			[[['Joaozinho Santos'], ['Maria Joaquina'], ['Felipe Ret']]]
// 		);

// 		if (rows) {
// 			console.log('Users inserteds');
// 			console.dir(rows);
// 		}
// 	} catch (e) {
// 		console.error(e);
// 	}
// }

// async function getUsersDB(conn: Connection) {
// 	const [rows, fields] = await conn.query('SELECT * FROM Users');

// 	console.log('Get all users');
// 	return rows;
// }

// main();
