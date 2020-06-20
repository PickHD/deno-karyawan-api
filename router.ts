import { Router } from "https://deno.land/x/oak/mod.ts";


import {
  createKaryawan,
  getKaryawanWithId,
  getAllKaryawan,
  updateKaryawanWithId,
  deleteKaryawanWithId,
} from "./controllers/karyawanController.ts";

import requiresBody from "./middleware/requiresBody.ts";

const router = new Router();

router
  .get("/employees", getAllKaryawan)
  .post("/employees", requiresBody, createKaryawan)
  .get("/employees/:_id", getKaryawanWithId)
  .put("/employees/:_id", requiresBody, updateKaryawanWithId)
  .delete("/employees/:_id", deleteKaryawanWithId);

export default router;
