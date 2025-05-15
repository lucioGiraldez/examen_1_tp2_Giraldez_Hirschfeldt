import express from "express";
import { config } from "./config/config.js";
import { apiRouter } from "./routes/api.router.js";
import { bookRouter } from "./routes/book.router.js";
import { statusRouter } from "./routes/status.router.js";

const app = express();
app.use(express.json());

app.use("/api", apiRouter);
app.use("/api", statusRouter);
app.use("/api", bookRouter);

app.listen(config.PORT, () => {
	const message = `👏🚀SERVER FUNCIONANDO CORRECTAMENTE EN http://${config.HOST}:${config.PORT}`;
	console.log(message);
});
