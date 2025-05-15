import { Router } from "express";

const statusRouter = Router();

statusRouter.get("/version1/status", (req, res) => {
	res.json({
		status: 200,
		dateTime: new Date().toISOString(),
		message: "Bienvenido. La libreria esta funcionando correctamente",
		ok: true,
	});
});

statusRouter.get("/version2/status", (req, res) => {
	res.json({
		status: 500,
		dateTime: new Date().toISOString(),
		message:
			"Bienvenido a la libreria. En este momento no te podemos ayudar por un error interno",
		ok: false,
	});
});

export { statusRouter };
