import { Application, Router } from "https://deno.land/x/oak/mod.ts";
import { getProjectCats, getSong } from "./controllers/shell.ts";

const app = new Application();
const router = new Router();
const PORT = 4000;

router
  .get("/song", getSong)
  .get("/cats", getProjectCats)

app.use(router.routes());

console.log(`Server running on Port: ${PORT}`);
await app.listen({ port: PORT });
