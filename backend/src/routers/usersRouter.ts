/**
 * ----------------------
 *  the routers for users
 * ----------------------
 */

 import { Router } from "express";
 import { UserControllers } from "../controllers/usersController";
 
 const router: Router = Router();
 
 /* content */
 
 router.post("/login", UserControllers.login);
 router.post("/register", UserControllers.register);
 router.post("/logout", UserControllers.logout);
 router.put("/changepassword/:userID", UserControllers.changePassword);
 router.put("/edituser/:userID", UserControllers.editAccount);
 router.delete("/delete/:userID", UserControllers.deleteAccount);
 
 /*end router content*/
 
 export default router;