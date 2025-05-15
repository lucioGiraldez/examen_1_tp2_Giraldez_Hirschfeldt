import { ApiService } from "../service/api.service.js";

export const ApiController = {
	apiConsume: async (req, res) => {
		const csvToConvert = await ApiService.serviceApiConsume();
		if (!csvToConvert) {
			res.status(404).json({
				payload: null,
				message: "No se pudo guardar lo solicitado",
				ok: false,
			});
		} else {
			res.status(200).json({
				payload: csvToConvert.split("\n").slice(0, 3).join("\n"),
				message: "Guardado completado con exito",
				ok: true,
			});
		}
	},
};