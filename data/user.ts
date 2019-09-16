import { Connection } from 'mysql2/promise';

import conn from './connection';

export const getUsers = async () => {
	const [rows] = await conn.query('SELECT * FROM Users');

	console.log(rows);

	return rows;
	// let usersArray: any = [];

	// conn.query('SELECT * FROM Users', (err, rows) => {
	// 	if (err) throw err;

	// 	usersArray = rows;
	// });

	// console.log(usersArray);

	// if (usersArray !== []) return usersArray;
};

// export const getUsers = async (conn: Connection) => {
// 	const [rows] = await conn.query('SELECT * FROM Users');

// 	return rows;
// };

export const insertUser = async (conn: Connection, name: string) => {
	const [rows] = await conn.query('INSERT INTO Users(name) VALUES ?', [
		[[name]]
	]);

	return rows;
};

// class UserRepository {
// 	conn: Promise<Connection>;

// 	constructor(conn: Promise<Connection>) {
// 		this.conn = conn;
// 	}

// 	public async getUsers() {
// 		const [rows] = await this.conn.query('SELECT * FROM Users');

// 		return rows;
// 	}

// 	public async insertUser(name: string) {
// 		const [rows] = await this.conn.query('INSERT INTO Users(name) VALUES ?', [
// 			[[name]]
// 		]);

// 		return rows;
// 	}
// }

// export default UserRepository;
