import { Connection } from 'mysql2/promise';

import conn from './connection';

export const getUsers = async () => {
	const [rows] = await conn.query('SELECT * FROM Users');

	return rows;
};

export const getUser = async (id: number) => {
	const [rows] = await conn.query('SELECT * FROM Users WHERE id = ?', [[[id]]]);

	return rows;
};

export const insertUser = async (name: string) => {
	const [rows] = await conn.query('INSERT INTO Users(name) VALUES ?', [
		[[name]]
	]);

	if (rows) {
		const [newUser] = await conn.query('SELECT * FROM Users WHERE name = ?', [
			[[name]]
		]);

		return newUser;
	}
};

export const deleteUser = async (id: number) => {
	const [rows] = await conn.query('SELECT * FROM Users WHERE id = ?', [[[id]]]);

	await conn.query('DELETE FROM Users WHERE id = ?', [[[id]]]);

	return rows;
};
