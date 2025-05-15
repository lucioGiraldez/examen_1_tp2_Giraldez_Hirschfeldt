import fs from "node:fs/promises";
import { config } from "../config/config.js";

const { DB_PATH } = config;
const { DB_PATH_2 } = config;

export const JsonHandler = {
	async read() {
		try {
			const data = await fs.readFile(DB_PATH, { encoding: "utf8" });
			return JSON.parse(data || []);
		} catch (error) {
			console.error("Error leyendo el archivo:", error);
		}
	},

	async readTestFile() {
		try {
			const data = await fs.readFile(DB_PATH_2, { encoding: "utf8" });
			return JSON.parse(data || []);
		} catch (error) {
			console.error("Error leyendo el archivo:", error);
		}
	},

	async write(data) {
		try {
			const strData = JSON.stringify(data, null, 2);
			await fs.writeFile(DB_PATH, strData, { encoding: "utf8" });
		} catch (error) {
			console.log({ error });
		}
	},
};
