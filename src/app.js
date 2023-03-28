import Express from "Express";
import proyectrouter from "./router/proyect-router.js";
import Taksrouter from "./router/Taks-router.js";
const app = Express();
//middilewares
app.use(Express.json());
app.use(proyectrouter);
app.use(Taksrouter);


export default app;

