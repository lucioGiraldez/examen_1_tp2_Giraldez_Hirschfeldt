import fs from "fs";
import path from "path";
import fetch from "node-fetch";
import { config } from "../config/config.js";

export const ApiRepository = {
	save: async () => {

    const response = await fetch(config.URL_PATH);
		if (!response.ok) return null;

		const data = await response.text();

		const filePath = path.resolve("source/db/beers.csv");
		fs.writeFileSync(filePath, data);
		return data;

	},
};
