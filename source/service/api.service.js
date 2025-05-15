import { ApiRepository } from "../repository/api.repository.js";

export const ApiService = {
	serviceApiConsume: async () => {
		const csv = await ApiRepository.save();
		if (!csv) return null;

		return csv;
	},
};
