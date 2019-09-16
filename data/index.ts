import { createConnection, Connection } from 'mysql2/promise';

export class MysqlConnection {
	private conn: Promise<Connection>;

	constructor() {
		this.conn = this.connectDB();
	}

	private async connectDB(): Promise<Connection> {
		console.log('Connect to database');

		return await createConnection({
			host: 'localhost',
			user: 'lameck',
			password: 'GUERRAcivil',
			database: 'simpleDB'
		});
	}

	public async getUsers() {
		console.log('Get Users MySQL Class');

		return await this.conn.then(async connection => {
			const [rows] = await connection.query('SELECT * FROM Users');

			return rows;
		});
	}

	public async insertUser(name: string) {
		console.log('Add User');

		return await this.conn.then(async connection => {
			const [rows] = await connection.query(
				'INSERT INTO Users(name) VALUES ?',
				[[[name]]]
			);

			return rows;
		});
	}
}

// const dbConfig = {
// 	host: 'localhost',
// 	user: 'lameck',
// 	password: 'GUERRAcivil',
// 	database: 'simpleDB'
// };

// export class MysqlConnection {
// 	private conn: Connection;

// 	constructor() {
// 		this.conn = this.connectDB();
// 	}

// 	private async connectDB(): Connection {
// 		console.log('Connect to database');

// 		return await createConnection(dbConfig).then((connection: Connection) => {
// 			return connection;
// 		});
// 	}

// 	public async getUsers() {
// 		console.log('Get Users MySQL Class');

// 		return await this.conn.query('SELECT * FROM Users');
// 	}
// }
