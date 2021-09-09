/**
 * ----------------------
 *  the routers for memes
 * ----------------------
 */

import { Router } from "express";
import { MemeControllers } from "../controllers/memesController";

const router: Router = Router();

/* content */

router.get("/", MemeControllers.getMemes);
router.post("/", MemeControllers.createMeme);
router.get("/:memeID", MemeControllers.oneMeme);
router.delete("/:memeID", MemeControllers.deleteMeme);
router.put("/:memeID", MemeControllers.editMeme);

/*end router content*/

export default router;
