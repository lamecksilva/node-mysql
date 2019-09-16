import { Connection } from 'mysql2/promise';

import conn from './connection';

export const getUsers = async () => {
	const [rows] = await conn.query('SELECT * FROM Users');

	return rows;
};

export const insertUser = async (name: string) => {
	const [rows] = await conn.query('INSERT INTO Users(name) VALUES ?', [
		[[name]]
	]);

	return rows;
};
