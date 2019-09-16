import { createConnection, Connection } from 'mysql2/promise';

import { getUsers, insertUser } from './user';

export class MysqlConnection {
	private conn: Promise<Connection>;

	// Constructor of function
	constructor() {
		this.conn = this.connectDB();
	}

	// Connect to Database
	private async connectDB(): Promise<Connection> {
		console.log('Connect to database');

		return await createConnection({
			host: 'localhost',
			user: 'lameck',
			password: 'GUERRAcivil',
			database: 'simpleDB'
		});
	}

	// Get all users
	public getUsers() {
		console.log('Get Users MySQL Class');

		// return this.conn.then(async connection => {
		// 	return await getUsers(connection);
		// });
		return getUsers();
	}

	// Insert User in DB
	public async insertUser(name: string) {
		console.log('Add User');

		return this.conn.then(async connection => {
			return await insertUser(connection, name);
		});
	}
}
