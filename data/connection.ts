import { Connection, createConnection, createPool } from 'mysql2';

const promisePool = createPool({
	host: 'localhost',
	user: 'lameck',
	password: 'GUERRAcivil',
	database: 'simpleDB'
});

const connection = promisePool.promise();

export default connection;
